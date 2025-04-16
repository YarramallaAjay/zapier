interface Zap {
  name: string;
  trigger: string;
  actions: string[];
  status: 'active' | 'inactive';
  runCount: number;
}

export async function createZap(zap: Zap) {
  const response = await fetch('/api/zaps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zap),
  });

  if (!response.ok) {
    throw new Error('Failed to create Zap');
  }

  return response.json();
}

export async function getZaps() {
  const response = await fetch('/api/zaps');
  
  if (!response.ok) {
    throw new Error('Failed to fetch Zaps');
  }

  return response.json();
}

export async function getZap(id: string) {
  const response = await fetch(`/api/zaps/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch Zap');
  }

  return response.json();
}

export async function updateZap(id: string, zap: Partial<Zap>) {
  const response = await fetch(`/api/zaps/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zap),
  });

  if (!response.ok) {
    throw new Error('Failed to update Zap');
  }

  return response.json();
}

export async function deleteZap(id: string) {
  const response = await fetch(`/api/zaps/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete Zap');
  }

  return response.json();
} 