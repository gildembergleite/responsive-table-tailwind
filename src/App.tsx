import TableRow from './components/TableRow'

export default function App() {
  return (
    <main className='flex w-full min-h-screen justify-center items-center bg-zinc-900 text-white p-20'>
      <table className='table-fixed min-w-full md:h-3/4 md:rounded-t-lg overflow-hidden'>
        <thead className='bg-zinc-800 hidden md:table-header-group bg-gray-divider border-b-4 border-zinc-900 whitespace-nowrap'>
          <tr className='text-left font-bold'>
            <th scope='col' className='py-4 px-6'>
              Tarefa
            </th>
            <th scope='col' className='py-4 px-6'>
              Duração
            </th>
            <th scope='col' className='py-4 px-6'>
              Início
            </th>
            <th scope='col' className='py-4 px-6'>
              Status
            </th>
          </tr>
        </thead>
        <tbody className='flex flex-col md:table-row-group md:divide-y-4 divide-zinc-900 whitespace-nowrap gap-4'>         
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </main>
  )
}
