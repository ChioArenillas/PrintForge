import React from 'react'
import { getModels } from '@/app/lib/models'
import ModelGrid from '../components/ModelGrid'
import { ModelsPageProps } from '../types'
import Form from "next/form"

export default async function ModelsPage({ searchParams }: ModelsPageProps) {

  const models = await getModels()
  const query = (await searchParams)?.query?.toLowerCase() || ""

  const filterModels = query ?
    models.filter(model =>
      model.name.toLowerCase().includes(query)
      || model.description.toLowerCase().includes(query)
    )
    : models

  return (
    <>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder='E.g. tool'
          autoComplete='off'
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base" />
      </Form>
      <ModelGrid title="3D Models" models={filterModels} />
    </>
  )
}
