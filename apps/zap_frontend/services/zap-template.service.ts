import { axiosInstance } from "@/apiHandlers/ApiInstance";

export interface ZapTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  isPopular: boolean;
  createdAt: string;
  updatedAt: string;
  triggerApp: {
    id: string;
    name: string;
    description: string;
  };
  trigger: {
    id: string;
    name: string;
    description: string;
    metadata: Record<string, any>;
    configMetadata: Record<string, any>;
  };
  actionApp: {
    id: string;
    name: string;
    description: string;
  };
  action: {
    id: string;
    name: string;
    description: string;
    metadata: Record<string, any>;
    configMetadata: Record<string, any>;
  };
  triggerConfig: Record<string, any>;
  actionConfig: Record<string, any>;
}

export const getZapTemplates = async (): Promise<ZapTemplate[]> => {
  const response = await axiosInstance.get('/templates');
  return response.data;
};

export const getPopularZapTemplates = async (): Promise<ZapTemplate[]> => {
  const response = await axiosInstance.get('/templates/popular');
  return response.data;
};

export const getZapTemplatesByCategory = async (category: string): Promise<ZapTemplate[]> => {
  const response = await axiosInstance.get(`/templates/category/${category}`);
  return response.data;
};

export const getZapTemplateById = async (id: string): Promise<ZapTemplate> => {
  const response = await axiosInstance.get(`/templates/${id}`);
  return response.data;
};

export const createZapFromTemplate = async (templateId: string, name: string): Promise<any> => {
  const response = await axiosInstance.post(`/templates/${templateId}/use`, { name });
  return response.data;
}; 