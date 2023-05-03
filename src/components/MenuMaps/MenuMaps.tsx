import React, {useState, useEffect} from "react";
import Select from 'react-select'

interface Props {
    coordinates: any;
    onChildData: any;
    onReset: any;
}

const Menu: React.FC<Props> = ({coordinates, onChildData, onReset}) => {
    const [formData, setFormData] = useState<number[][]>([[]]);
    const [childData, setChildData] = useState<number[][]>([[]]);
    const [loading, setLoading] = useState(false);
    let coordinatesCopy = [...coordinates];

    const options = [
        { value: 'Truck', label: 'Truck' },
        { value: 'Truck', label: 'Truck' },
        { value: 'Truck', label: 'Truck' }
    ]

    //Send Coordinates
    const handleSubmit = () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        };
    
        fetch('http://192.168.100.52:5000/find_shortest_route', requestOptions)
          .then(response => response.json())
          .then(dataRoute => {
                setChildData(dataRoute);
                setLoading(false);
            })
          .catch(error => console.log(error));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleManualSubmit = () => {
        console.log('Clicked');

        setLoading(true);
        //Get Coordinates
        let result = [];
        for (let i = 0; i < 10; i++) {
            let randomIndex = Math.floor(Math.random() * coordinatesCopy.length);
            let randomElement = coordinatesCopy.splice(randomIndex, 1)[0];
            result.push(randomElement);
        }

        //console.log(result)
        setFormData(
            result
        );
    };

    useEffect(() => {
        console.log('Form data');
        console.log(formData);
        
        if(formData[0].length > 0){
            console.log('Handling Submit');
            handleSubmit();
        }
            
    }, [formData]);

    useEffect(() => {
        console.log('handleChildChange');
        if (childData[0].length > 0)
            onChildData(childData);
            
    }, [childData]);

    return (
        <div className="flex flex-col w-full h-1/5 justify-center items-center bg-white rounded-t-3xl absolute bottom-0 z-50 shadow-2xl gap-y-4">
            <div className="flex gap-x-3">
            <button className='rounded-full bg-green-600 text-white border-solid border-2 border-black p-3 transition-all hover:bg-green-400' onClick={onReset}>Reset routes</button>
            {loading ? (<button type="button" className="inline-flex items-center px-4 rounded-full bg-green-400 text-black border-solid border-2 border-black p-3 transition-all" disabled>
                            <svg className="w-5 h-5 mr-3 -ml-1 text-black animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Loading...
                        </button>)
                        :
                        (<button className='rounded-full bg-green-600 text-white border-solid border-2 border-black p-3 transition-all hover:bg-green-400' onClick={handleManualSubmit}>Randomise</button>)}
            </div>
        </div>
    );
}

export default Menu;

