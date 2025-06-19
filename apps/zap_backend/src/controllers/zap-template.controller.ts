import { Request, Response } from 'express'
import { PrismaClient } from '@repo/db/src'
import { ZapHandler } from '../handlers/zapHandler'
import { UserDetails } from '@repo/types/src/UserSession'

const prisma = new PrismaClient()

export const getZapTemplates = async ( res: Response): Promise<void> => {
  try {
    const templates = await prisma.zapTemplate.findMany({
      include: {
        triggerApp: true,
        trigger: true,
        actionApp: true,
        action: true
      }
    })
    res.json(templates)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching zap templates', error })
  }
}

export const getZapTemplateById = async (req: Request, res: Response): Promise<void> => {
  try {
    const template = await prisma.zapTemplate.findUnique({
      where: { id: req.params.id },
      include: {
        triggerApp: true,
        trigger: true,
        actionApp: true,
        action: true
      }
    })
    if (!template) {
      res.status(404).json({ message: 'Zap template not found' })
      return
    }
    res.json(template)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching zap template', error })
  }
}

export const createZapTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const template = await prisma.zapTemplate.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        isPopular: req.body.isPopular || false,
        triggerAppId: req.body.triggerAppId,
        triggerId: req.body.triggerId,
        actionAppId: req.body.actionAppId,
        actionId: req.body.actionId,
        triggerConfig: req.body.triggerConfig || {},
        actionConfig: req.body.actionConfig || {}
      },
      include: {
        triggerApp: true,
        trigger: true,
        actionApp: true,
        action: true
      }
    })
    res.status(201).json(template)
  } catch (error) {
    res.status(500).json({ message: 'Error creating zap template', error })
  }
}

export const updateZapTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const template = await prisma.zapTemplate.update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        isPopular: req.body.isPopular,
        triggerAppId: req.body.triggerAppId,
        triggerId: req.body.triggerId,
        actionAppId: req.body.actionAppId,
        actionId: req.body.actionId,
        triggerConfig: req.body.triggerConfig,
        actionConfig: req.body.actionConfig
      },
      include: {
        triggerApp: true,
        trigger: true,
        actionApp: true,
        action: true
      }
    })
    if (!template) {
      res.status(404).json({ message: 'Zap template not found' })
      return
    }
    res.json(template)
  } catch (error) {
    res.status(500).json({ message: 'Error updating zap template', error })
  }
}

export const deleteZapTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const template = await prisma.zapTemplate.delete({
      where: { id: req.params.id }
    })
    if (!template) {
      res.status(404).json({ message: 'Zap template not found' })
      return
    }
    res.json({ message: 'Zap template deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting zap template', error })
  }
}

export const getPopularZapTemplates = async ( res: Response): Promise<void> => {
  try {
    const templates = await prisma.zapTemplate.findMany({
      where: { isPopular: true },
      include: {
        triggerApp: true,
        trigger: true,
        actionApp: true,
        action: true
      }
    })
    res.json(templates)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching popular zap templates', error })
  }
}

export const getZapTemplatesByCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const templates = await prisma.zapTemplate.findMany({
      where: { category: req.params.category },
      include: {
        triggerApp: true,
        trigger: true,
        actionApp: true,
        action: true
      }
    })
    res.json(templates)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching zap templates by category', error })
  }
}

export const createZapFromTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const template = await prisma.zapTemplate.findUnique({
      where: { id: req.params.id },
      include: {
        triggerApp: true,
        trigger: true,
        actionApp: true,
        action: true
      }
    })
    if (!template) {
      res.status(404).json({ message: 'Zap template not found' })
      return
    }

    if (!req.user) {
      res.status(401).json({ message: 'User not authenticated' })
      return
    }

    const user = req.user as UserDetails
    const { name } = req.body

    const zapData = {
      name,
      userId: user.id,
      description: template.description,
      metadata: {},
      image: null,
      templateId: template.id
    }

    req.body = zapData
    await ZapHandler.createZap(req, res)
  } catch (error) {
    res.status(500).json({ message: 'Error creating zap from template', error })
  }
} 