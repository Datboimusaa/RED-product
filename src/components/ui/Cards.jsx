function Cards({image, address, name, price}) {
    return(
        <div className="bg-white rounded-xl  max-h-[400px] overflow-hidden cursor-pointer">
            <div className="h-[60%] ">
                <img src={image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="h-[40%] px-5 py-5">
                <p className="text-sm text-[#8D4B38] h-[20%] ">{address}</p>
                <h2 className="text-xl h-[40%] truncate">{name}</h2>
                <p className="h-[40%]">{price}</p>
            </div>
        </div>
    )
}

export default Cards