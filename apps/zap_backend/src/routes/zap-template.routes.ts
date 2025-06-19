import { Router } from 'express'
import {
  getZapTemplates,
  getZapTemplateById,
  createZapTemplate,
  updateZapTemplate,
  deleteZapTemplate,
  getPopularZapTemplates,
  getZapTemplatesByCategory,
} from '../controllers/zap-template.controller'
const templaterouter = Router()

// Public routes
templaterouter.get('/', getZapTemplates)
templaterouter.get('/popular', getPopularZapTemplates)
templaterouter.get('/category/:category', getZapTemplatesByCategory)
templaterouter.get('/:id', getZapTemplateById)

// Protected routes (require authentication)
templaterouter.post('/', createZapTemplate)
templaterouter.put('/:id', updateZapTemplate)
templaterouter.delete('/:id', deleteZapTemplate)
templaterouter.post('/:id/use', require('./../controllers/zap-template.controller').createZapFromTemplate)

export default templaterouter 