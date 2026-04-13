import { getCategoryBySlug } from '@/app/lib/categories'
import { CategoryPageProps } from '@/app/types'
import React from 'react'
import ModelGrid from '@/app/components/ModelGrid'
import { getModels } from '@/app/lib/models'

export default async function CategoryPage({ params }: CategoryPageProps) {

  const { categoryName } = await params
  const category = getCategoryBySlug(categoryName)
  const models = await getModels({ category: category.slug })

  return (
    <div>
      <ModelGrid title={category.displayName} models={models} />
    </div> 
  )
}
