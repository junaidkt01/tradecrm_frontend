import Skeleton from "react-loading-skeleton"

const Tableskeleton = ({ count }: { count: number }) => {
    return (
        <>
            {
                Array.from(({ length: 10 })).map((_, i) => <tbody key={i} ><tr>
                    {
                        Array.from(({ length: count })).map((_, index) => <td key={index}> <Skeleton /> </td>)
                    }
                </tr></tbody>)
            }
        </>
    )
}

export default Tableskeleton
