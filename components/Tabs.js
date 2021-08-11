import { DotsHorizontalIcon } from "@heroicons/react/outline"

const Tabs = () => {
  return (
    <div class="border-b border-gray-200">
      <nav class="flex justify-around text-sm font-tweb sm:flex-row">
        <button class="ml-4 py-4 px-2 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
          New
        </button>
        <button class="text-gray-600 py-4 px-2 block hover:text-blue-500 focus:outline-none">
          In progress
        </button>
        <button class="text-gray-600 py-4 px-2 block hover:text-blue-500 focus:outline-none">
          On hold
        </button>
        <button class="text-gray-600 py-4 px-2 block hover:text-blue-500 focus:outline-none">
          Completed
        </button>
        <button class="py-4 px-2 block focus:outline-none">
          <DotsHorizontalIcon className="text-gray-400 w-6 h-6  hover:text-blue-500" />
        </button>
      </nav>
    </div>
  )
}

export default Tabs
