import { PrismaClient } from '@repo/db/src'

const prisma = new PrismaClient()

const templates = [
  {
    name: 'Gmail to Slack',
    description: 'Send Slack notifications for new Gmail messages',
    category: 'Communication',
    isPopular: true,
    triggerAppId: 'gmail-app-id', // You'll need to replace this with actual app IDs
    triggerId: 'gmail-trigger-id',
    actionAppId: 'slack-app-id',
    actionId: 'slack-action-id',
    triggerConfig: {
      // Additional trigger configuration
    },
    actionConfig: {
      // Additional action configuration
    }
  },
  // Add more templates as needed
]

async function seedTemplates() {
  try {
    // Clear existing templates
    await prisma.zapTemplate.deleteMany({})

    // Insert new templates
    for (const template of templates) {
      await prisma.zapTemplate.create({
        data: template
      })
    }

    console.log('Successfully seeded zap templates')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding templates:', error)
    process.exit(1)
  }
}

seedTemplates() 