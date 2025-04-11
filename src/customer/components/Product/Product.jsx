'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { mens_kurta as importedMensKurta } from '../../../Data/mens_kurta'
import ProductCard from './ProductCard'
import { filters as importedFilters, singleFilter as importedSingleFilter } from './FilterData'
import FilterListIcon from '@mui/icons-material/FilterList';

const originalData = Array.isArray(importedMensKurta) ? importedMensKurta : []
const filters = Array.isArray(importedFilters) ? importedFilters : []
const singleFilter = Array.isArray(importedSingleFilter) ? importedSingleFilter : []

const sortOptions = [
  { name: 'Price: Low to High', current: false, compareFn: (a, b) => a.price - b.price },
  { name: 'Price: High to Low', current: false, compareFn: (a, b) => b.price - a.price },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filterData, setFilterData] = useState(originalData)
  const [activeFilters, setActiveFilters] = useState([])
  const [selectedSort, setSelectedSort] = useState(null)

  function handleFilterChange(event) {
    const value = event.target.value.toLowerCase()
    const checked = event.target.checked

    const updatedFilters = checked
      ? [...activeFilters, value]
      : activeFilters.filter((filter) => filter !== value)

    setActiveFilters(updatedFilters)

    const filteredData = originalData.filter((item) => {
      return updatedFilters.every((filter) =>
        item.name.toLowerCase().includes(filter) ||
        (item.color && item.color.toLowerCase().includes(filter)) ||
        (item.size && item.size.toLowerCase().includes(filter))
      )
    })

    const sortedData = selectedSort ? [...filteredData].sort(selectedSort.compareFn) : filteredData
    setFilterData(sortedData)
  }

  function handleSortChange(option) {
    setSelectedSort(option)
    const sorted = [...filterData].sort(option.compareFn)
    setFilterData(sorted)
  }

  return (
    <div className="bg-white">
      <div>
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop className="fixed inset-0 bg-black/25" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <XMarkIcon className="size-6" aria-hidden="true" />
                </button>
              </div>
              <form className="mt-4 border-t border-gray-200">
                {[...filters, ...singleFilter].map((section) => (
                  <Disclosure key={section?.id || Math.random()} as="div" className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between px-2 py-3 text-gray-900">
                          <span className="font-medium">{section?.name}</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="size-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="size-5" aria-hidden="true" />
                            )}
                          </span>
                        </DisclosureButton>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-6">
                            {Array.isArray(section?.options) && section.options.map((option, idx) => (
                              <div key={option.value} className="flex gap-3">
                                <input
                                  id={`filter-mobile-${section.id}-${idx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  value={option.value}
                                  onChange={handleFilterChange}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor={`filter-mobile-${section.id}-${idx}`} className="text-sm text-gray-600">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon className="ml-1 size-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => handleSortChange(option)}
                            className={classNames(
                              option === selectedSort ? 'font-semibold text-indigo-600' : 'text-gray-700',
                              active ? 'bg-gray-100' : '',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            {option.name}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
              <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
                <Squares2X2Icon className="size-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
              >
                <FunnelIcon className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
               <div>
                <div className='py-10 flex justify-between items-center'>
                <h1 className='text-lg opacity-50 font-bold'>Filters</h1>
                <FilterListIcon/>
                </div>
              <form className="hidden lg:block">
                {[...filters, ...singleFilter].map((section) => (
                  <Disclosure key={section?.id || Math.random()} as="div" className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between text-sm text-gray-900">
                          <span className="font-medium">{section?.name}</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="size-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="size-5" aria-hidden="true" />
                            )}
                          </span>
                        </DisclosureButton>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {Array.isArray(section?.options) && section.options.map((option, idx) => (
                              <div key={option.value} className="flex gap-3">
                                <input
                                  id={`filter-${section.id}-${idx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  value={option.value}
                                  onChange={handleFilterChange}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor={`filter-${section.id}-${idx}`} className="text-sm text-gray-600">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
               </div>
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {Array.isArray(filterData) && filterData.length > 0 ? (
                    filterData.map((item, index) => (
                      <ProductCard key={index} product={item} />
                    ))
                  ) : (
                    <p className="text-gray-500">No products available.</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
