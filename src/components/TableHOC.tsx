import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import {useTable,Column, TableOptions,useSortBy,usePagination} from "react-table"



function TableHOC<T extends Object>(columns : Column<T>[],data:T[],containerClassname:string,heading:string,showPagination:boolean=false){
    return function HOC(){
        const options:TableOptions<T>={
            columns,data,initialState:{
                pageSize:6
            }
        }
        const {getTableBodyProps,getTableProps,headerGroups,page,prepareRow,nextPage,previousPage,canNextPage,canPreviousPage,pageCount,state:{pageIndex}}=useTable(options,useSortBy,usePagination);

        return <div className={containerClassname}>
            <h2 className="heading">{heading}</h2>
            <table className='table' {...getTableProps}>
                <thead>
{headerGroups.map((headerGroups,index)=>{
    return <tr {...headerGroups.getHeaderGroupProps()} key={index}>{/*khud kia hai */}

{
    headerGroups.headers.map((column,index)=>(
        <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>{/*khud kia hai */}
            {column.render("Header")}
            {column.isSorted && <span>{" "}{column.isSortedDesc?<AiOutlineSortDescending/>:<AiOutlineSortAscending/>}</span>}
        </th>
    ))
}

    </tr>
})}
                </thead>
                <tbody  {...getTableBodyProps()}>
     {   page.map((row)=>{
            prepareRow(row);
            return <tr {...row.getRowProps()} key={row.id}>{/*khud kia hai */}
                {
                    row.cells.map((cell,index)=>(
                        <td {...cell.getCellProps()} key={index}>
                            {cell.render("Cell")} 
                        </td>
                    ))
                }
            </tr>
        })}
                </tbody>

            </table>
            {
showPagination && (
    <div className="table-pagination">
        <button  onClick={previousPage} disabled={!canPreviousPage}>Previous</button>
        <span> {`${pageIndex+1}  - ${pageCount}`}</span>
        <button onClick={nextPage} disabled={!canNextPage}>Next</button>
    </div>
)
            }
        </div>
    }
}
export default TableHOC