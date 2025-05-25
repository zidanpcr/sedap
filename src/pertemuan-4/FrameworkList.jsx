import frameworkData from "./framework.json";  

export default function FrameworkList() {  
    return (  
        <div className="p-8">  
            {frameworkData.map((item) => (  
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">  
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>  
                    <p className="text-gray-600">{item.description}</p>  
                    <p className="text-gray-600">Developer: {item.details.developer}</p>  
                    <p className="text-gray-600">  
                    <a href={item.details.officialWebsite} className="text-purple-500 underline">{item.details.officialWebsite}</a>  
                    </p>  
                    <div className="mt-2">  
                        {item.tags.map((tag, index) => (  
                            <span key={index} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full mr-2">  
                                {tag}  
                            </span>  
                        ))}  

                        
                    </div>  
                    
                </div>  
                
            ))}  
        </div>  
    );  
}
