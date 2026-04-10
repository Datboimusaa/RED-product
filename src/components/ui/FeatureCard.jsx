function FeatureCard({icon, stat, name, children}) {
    return( 
        <div className="flex items-center bg-white rounded-xl py-4">
            <div className="w-[30%] flex justify-center">
                {icon}
            </div>
            <div className="w-[70%]">
                <div className=" flex gap-2 items-center">
                    <h1 className="text-2xl">{stat}</h1>
                    <span className="font-light">{name}</span>
                </div>
                <div className="text-gray-600">{children}</div>
            </div>
        </div>
    )
}

export default FeatureCard