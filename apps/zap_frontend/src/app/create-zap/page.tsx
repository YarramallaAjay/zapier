'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Trigger {
  id: string;
  name: string;
  description: string;
}

interface Action {
  id: string;
  name: string;
  description: string;
}

const triggers: Trigger[] = [
  {
    id: 'new_email',
    name: 'New Email',
    description: 'Trigger when a new email is received',
  },
  {
    id: 'new_file',
    name: 'New File',
    description: 'Trigger when a new file is added',
  },
];

const actions: Action[] = [
  {
    id: 'send_email',
    name: 'Send Email',
    description: 'Send an email to a specified address',
  },
  {
    id: 'create_file',
    name: 'Create File',
    description: 'Create a new file in a specified location',
  },
];

export default function CreateZapPage() {
  const [zapName, setZapName] = useState('');
  const [selectedTrigger, setSelectedTrigger] = useState<string>('');
  const [selectedAction, setSelectedAction] = useState<string>('');

  const handleCreateZap = () => {
    // TODO: Implement Zap creation logic
    console.log('Creating Zap:', {
      name: zapName,
      trigger: selectedTrigger,
      action: selectedAction,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Zap</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Zap Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="zapName">Zap Name</Label>
              <Input
                id="zapName"
                value={zapName}
                onChange={(e) => setZapName(e.target.value)}
                placeholder="Enter a name for your Zap"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Trigger</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Select a Trigger</Label>
              <Select value={selectedTrigger} onValueChange={setSelectedTrigger}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a trigger" />
                </SelectTrigger>
                <SelectContent>
                  {triggers.map((trigger) => (
                    <SelectItem key={trigger.id} value={trigger.id}>
                      {trigger.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedTrigger && (
              <p className="text-sm text-gray-500">
                {triggers.find((t) => t.id === selectedTrigger)?.description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Action</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Select an Action</Label>
              <Select value={selectedAction} onValueChange={setSelectedAction}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an action" />
                </SelectTrigger>
                <SelectContent>
                  {actions.map((action) => (
                    <SelectItem key={action.id} value={action.id}>
                      {action.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedAction && (
              <p className="text-sm text-gray-500">
                {actions.find((a) => a.id === selectedAction)?.description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          onClick={handleCreateZap}
          disabled={!zapName || !selectedTrigger || !selectedAction}
        >
          Create Zap
        </Button>
      </div>
    </div>
  );
} 