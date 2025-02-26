"use client";

import { BACKEND_URL } from "../../config";
import Appbar from "../../components/AppBar";
import { Input } from "../../components/Input";
import { ZapCell } from "../../components/ZapCell";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SelectedAction {
    id: string;
    name: string;
    metadata: any;
    index: number;
    availableActionName: string;
}

function useAvailableActionsAndTriggers() {
    const [availableActions, setAvailableActions] = useState([]);
    const [availableTriggers, setAvailableTriggers] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/zapcatalogue`, { withCredentials: true })
            .then(response => {
                setAvailableTriggers(response.data.triggers);
                setAvailableActions(response.data.actions);
                console.log("Fetched Triggers:", response.data.triggers);
                console.log("Fetched Actions:", response.data.actions);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return { availableActions, availableTriggers };
}

export default function ZapManager() {
    const router = useRouter();
    const { availableActions, availableTriggers } = useAvailableActionsAndTriggers();
    const [selectedTrigger, setSelectedTrigger] = useState<{ id: string, name: string } | null>(null);
    const [selectedActions, setSelectedActions] = useState<SelectedAction[]>([]);
    const [selectedModalIndex, setSelectedModalIndex] = useState(null);

    console.log("Selected Trigger:", selectedTrigger);
    console.log("Selected Actions:", selectedActions);

    return (
        <div>
            <Appbar />
            <div className="flex justify-end bg-slate-200 p-4">
                <PrimaryButton onClick={async () => {
                    if (!selectedTrigger?.id) return;
                    try {
                        const response = await axios.post(`${BACKEND_URL}/newzap`, {
                            availableTriggerId: selectedTrigger.id,
                            triggerMetadata: {},
                            actions: selectedActions.map(a => ({
                                availableActionId: a.id,
                                actionMetadata: a.metadata
                            }))
                        }, { withCredentials: true });

                        console.log("Zap Created:", response.data);
                        router.push("/dashboard");
                    } catch (error) {
                        console.error("Error creating zap:", error);
                    }
                }}>Publish</PrimaryButton>
            </div>
            <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center">
                <div className="flex justify-center w-full">
                    <ZapCell onClick={() => setSelectedModalIndex(1)} name={selectedTrigger?.name || "Trigger"} index={1} />
                </div>
                <div className="w-full pt-2 pb-2">
                    {selectedActions.map((action, index) => (
                        <div key={index} className="pt-2 flex justify-center">
                            <ZapCell onClick={() => setSelectedModalIndex(action.index)} name={action.availableActionName || "Action"} index={action.index} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <PrimaryButton onClick={() => {
                        setSelectedActions(prev => [...prev, {
                            id: "",
                            name: "",
                            metadata: {},
                            index: prev.length + 2,
                            availableActionName: ""
                        }]);
                    }}>+
                    </PrimaryButton>
                </div>
            </div>
            {selectedModalIndex && <Modal availableItems={selectedModalIndex === 1 ? availableTriggers : availableActions} onSelect={(props) => {
                if (!props) return setSelectedModalIndex(null);
                if (selectedModalIndex === 1) {
                    setSelectedTrigger({ id: props.id, name: props.name });
                } else {
                    setSelectedActions(prev => {
                        let updated = [...prev];
                        updated[selectedModalIndex - 2] = { index: selectedModalIndex, id: props.id, availableActionName: props.name, metadata: props.metadata };
                        return updated;
                    });
                }
                setSelectedModalIndex(null);
            }} index={selectedModalIndex} />}
        </div>
    );
}

function Modal({ index, onSelect, availableItems }) {
    const [selectedAction, setSelectedAction] = useState(null);
    if (!availableItems) return <div>No items found</div>;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full bg-slate-100 bg-opacity-70">
            <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow">
                <div className="flex justify-between p-4 border-b">
                    <div className="text-xl">Select {index === 1 ? "Trigger" : "Action"}</div>
                    <button onClick={() => onSelect(null)} className="text-gray-400 hover:bg-gray-200 rounded-lg p-2">
                        ✕
                    </button>
                </div>
                <div className="p-4 space-y-4">
                    {availableItems.map(({ id, name, image }, idx) => (
                        <div key={idx} onClick={() => onSelect({ id, name, metadata: {} })} className="flex border p-4 cursor-pointer hover:bg-slate-100">
                            <img src={image} width={30} className="rounded-full mr-4" />
                            <div>{name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
