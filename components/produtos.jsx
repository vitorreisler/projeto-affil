const Produtos = ({children}) => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap md:gap-6 pt-5 mx-2 ">
            {children}
        </div>
     );
}
 
export default Produtos;