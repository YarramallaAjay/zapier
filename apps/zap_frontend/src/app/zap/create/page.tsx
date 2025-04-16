'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { createZap } from "@/src/lib/api";

interface App {
  id: string;
  name: string;
  description: string;
}

interface Trigger {
  id: string;
  name: string;
  description: string;
  appId: string;
}

interface Action {
  id: string;
  name: string;
  description: string;
  appId: string;
}

export default function CreateZapPage() {
  const router = useRouter();
  const { toast, currentToast } = useToast();
  const { user } = useAuth();
  const [apps, setApps] = useState<App[]>([]);
  const [triggers, setTriggers] = useState<Trigger[]>([]);
  const [actions, setActions] = useState<Action[]>([]);
  const [selectedApp, setSelectedApp] = useState<string>('');
  const [selectedTrigger, setSelectedTrigger] = useState<string>('');
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [zapName, setZapName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    loadApps();
  }, [user, router]);

  const loadApps = async () => {
    try {
      const response = await fetch('/api/apps');
      if (!response.ok) throw new Error('Failed to load apps');
      const data = await response.json();
      setApps(data);
    } catch (err) {
      setError('Failed to load apps. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to load apps',
        variant: 'destructive',
      });
    }
  };

  const loadTriggers = async (appId: string) => {
    try {
      const response = await fetch(`/api/apps/${appId}/triggers`);
      if (!response.ok) throw new Error('Failed to load triggers');
      const data = await response.json();
      setTriggers(data);
    } catch (err) {
      setError('Failed to load triggers. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to load triggers',
        variant: 'destructive',
      });
    }
  };

  const loadActions = async (appId: string) => {
    try {
      const response = await fetch(`/api/apps/${appId}/actions`);
      if (!response.ok) throw new Error('Failed to load actions');
      const data = await response.json();
      setActions(data);
    } catch (err) {
      setError('Failed to load actions. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to load actions',
        variant: 'destructive',
      });
    }
  };

  const handleAppChange = (appId: string) => {
    setSelectedApp(appId);
    setSelectedTrigger('');
    setSelectedAction('');
    loadTriggers(appId);
    loadActions(appId);
  };

  const handleCreateZap = async () => {
    if (!zapName || !selectedTrigger || !selectedAction) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const zap = await createZap({
        name: zapName,
        trigger: selectedTrigger,
        actions: [selectedAction],
        status: 'active',
        runCount: 0,
      });

      toast({
        title: 'Success',
        description: 'Zap created successfully',
      });

      router.push('/zap/dashboard');
    } catch (err) {
      setError('Failed to create Zap. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to create Zap',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Zap</h1>
      
      {currentToast && (
        <div className={`mb-4 p-4 rounded-md ${
          currentToast.variant === 'destructive' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          <h3 className="font-bold">{currentToast.title}</h3>
          {currentToast.description && (
            <p className="text-sm">{currentToast.description}</p>
          )}
        </div>
      )}
      
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
          <CardTitle>App Selection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Select an App</Label>
              <Select value={selectedApp} onValueChange={handleAppChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an app" />
                </SelectTrigger>
                <SelectContent>
                  {apps.map((app) => (
                    <SelectItem key={app.id} value={app.id}>
                      {app.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedApp && (
        <>
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
        </>
      )}

      {error && (
        <div className="mb-4 text-red-500 text-sm">{error}</div>
      )}

      <div className="flex justify-end">
        <Button
          onClick={handleCreateZap}
          disabled={!zapName || !selectedTrigger || !selectedAction || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            'Create Zap'
          )}
        </Button>
      </div>
    </div>
  );
} 