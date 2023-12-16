export default function TableRow() {

  return (
    <tr className='bg-zinc-700 md:divide-y-0 bg-gray-count text-left divide-y-2 divide-zinc-900 rounded-lg md:rounded-none'>
      <th
        scope='row'
        data-label='Tarefa'
        className='md:max-w-[280px] truncate py-4 px-6 block text-right before:pr-12 before:float-left before:content-[attr(data-label)] before:font-bold md:before:content-none md:before:float-none md:text-left md:table-cell'
      >
        Descrição da tarefa
      </th>
      <td
        data-label='Duração'
        className='py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold md:before:content-none md:before:float-none md:text-left md:table-cell'
      >
        20 {'minuto(s)'}
      </td>
      <td
        data-label='Início'
        className='py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold md:before:content-none md:before:float-none md:text-left md:table-cell'
      >
        16/12/2023
      </td>
      <td
        data-label='Status'
        className='py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold md:before:content-none md:before:float-none md:text-left md:table-cell'
      >
        Concluído
      </td>
    </tr>
  )
}