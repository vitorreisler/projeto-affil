const Produtos = ({children}) => {
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 flex-wrap md:gap-6 pt-5 mx-2 ">
            {children}
        </div>
     );
}
 
export default Produtos;