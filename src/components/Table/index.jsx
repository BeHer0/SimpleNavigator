// todo
export default function Table({list}) {
  return (
    list && (
      <table className='w-full border-collapse text-sm custom-table'>
        <thead>
          <tr className='border-b py-4 text-left dark:border-neutral-700'>
            <th className='py-2 font-semibold'>属性</th>
            <th className='py-2 pl-6 font-semibold'>类型</th>
            <th className='px-6 py-2 font-semibold'>描述</th>
          </tr>
        </thead>
        <tbody className='align-baseline text-gray-900 dark:text-gray-100'>
          {list.map(({option, type, desc = ''}, index) => {
            return (
              <tr
                key={index}
                className='border-b border-gray-100 dark:border-neutral-700/50'
              >
                <td className='whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500'>
                  {option}
                </td>
                <td className='whitespace-pre py-2 pl-6 font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400'>
                  {type}
                </td>
                <td className='py-2 pl-6'>{desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}
