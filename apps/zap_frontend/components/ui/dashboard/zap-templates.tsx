"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog'
import { ScrollArea } from './ui/scroll-area'
import { useToast } from '@/hooks/use-toast'
import { ZapTemplate, getZapTemplates, getPopularZapTemplates, getZapTemplatesByCategory, createZapFromTemplate } from '@/services/zap-template.service'
import { useRouter } from 'next/navigation'

interface ZapTemplatesProps {
  onZapCreated?: () => void
}

export function ZapTemplates({ onZapCreated }: ZapTemplatesProps) {
  const [templates, setTemplates] = useState<ZapTemplate[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<ZapTemplate | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showConfigModal, setShowConfigModal] = useState(false)
  const [zapName, setZapName] = useState('')
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    loadTemplates()
  }, [selectedCategory])

  const loadTemplates = async () => {
    try {
      setLoading(true)
      let data: ZapTemplate[]
      if (selectedCategory) {
        data = await getZapTemplatesByCategory(selectedCategory)
      } else {
        data = await getZapTemplates()
      }
      setTemplates(data)
    } catch (error) {
      console.error('Error loading templates:', error)
      toast({
        title: 'Error',
        description: 'Failed to load zap templates',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleTemplateClick = (template: ZapTemplate) => {
    setSelectedTemplate(template)
    setShowDetailsModal(true)
  }

  const handleUseTemplate = () => {
    setShowDetailsModal(false)
    setShowConfigModal(true)
  }

  const handleCreateZap = async () => {
    if (!selectedTemplate || !zapName) return

    try {
      const response = await createZapFromTemplate(selectedTemplate.id, zapName)
      toast({
        title: 'Success',
        description: 'Zap created successfully',
      })
      setShowConfigModal(false)
      setZapName('')
      setSelectedTemplate(null)
      if (onZapCreated) {
        onZapCreated()
      }
      // Navigate to the created zap
      router.push(`/dashboard/zaps/${response.id}`)
    } catch (error) {
      console.error('Error creating zap:', error)
      toast({
        title: 'Error',
        description: 'Failed to create zap',
        variant: 'destructive',
      })
    }
  }

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'social', name: 'Social Media' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.id === 'all' ? null : category.id)}
            className="whitespace-nowrap"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-lg border bg-card p-4 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <motion.div
              key={template._id}
              className="group relative h-48 rounded-lg border bg-card p-4 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleTemplateClick(template)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {template.description}
                  </p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs">{template.triggerApp.name[0]}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs">{template.actionApp.name[0]}</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{template.triggerApp.name}</span>
                  <span>→</span>
                  <span>{template.actionApp.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedTemplate?.name}</DialogTitle>
            <DialogDescription>{selectedTemplate?.description}</DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Trigger App</h4>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs">{selectedTemplate?.triggerApp.name[0]}</span>
                  </div>
                  <span>{selectedTemplate?.triggerApp.name}</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Action App</h4>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs">{selectedTemplate?.actionApp.name[0]}</span>
                  </div>
                  <span>{selectedTemplate?.actionApp.name}</span>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailsModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleUseTemplate}>Use Template</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configure Your Zap</DialogTitle>
            <DialogDescription>
              Give your zap a name to get started
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label htmlFor="zapName" className="text-sm font-medium">
                Zap Name
              </label>
              <Input
                id="zapName"
                value={zapName}
                onChange={(e) => setZapName(e.target.value)}
                placeholder="My Awesome Zap"
                className="mt-1"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfigModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateZap} disabled={!zapName}>
              Create Zap
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
} 