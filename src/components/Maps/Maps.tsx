import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { GoogleMap, LoadScript, MarkerF, Polyline } from '@react-google-maps/api';
import Menu from '../MenuMaps/MenuMaps';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Maps = () => {
    const [data, setData] = useState([]);
    const [formDataSelected, setFormDataSelected] = useState<number[][]>([[]]);
    const [routeData, setRouteData] = useState<number[][]>([[]]);
    const [polylinePath, setPolylinePath] = useState([{ lat: 0, lng: 0 }]);
    const [selectedMarkers, setSelectedMarker] = useState<number[][]>([]);
    const [renderedSelectedMarkers, setRenderedSelectedMarkers] = useState<JSX.Element[]>([]);
    const [renderedSelectedMarkersList, setRenderedSelectedMarkersList] = useState<JSX.Element[]>([]);
    const [highlightedMarker, setHighlightedMarker] = useState<any>([]);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState(undefined), [])

    // function to clear the polyline
    const clearPolyline = () => {
        setPolylinePath([]);
    };

    const clearRouteMarker = () => {
        setRouteData([[]])
    }

    const clearHighlightedMarker = () => {
        setHighlightedMarker([])
    }

    const clearClickedMarkers = () => {
        setSelectedMarker([])
    }

    const clearShortestRoute = () => {
        clearPolyline()
        clearRouteMarker()
        clearHighlightedMarker()
        clearClickedMarkers()
    }

    //Get Coordinates
    const fetchData = () => {
        fetch("http://192.168.100.52:5000/get_all_points")
            .then(response => {
            // console.log(response.json())
            return response.json()
            })
            .then(data => {
                setData(data)
            })
            .catch(error => console.log(error));
    }

    const handleChildData = (childData:any) => {
        setRouteData([[]]);
        if (childData.length > 0) {
            setRouteData(childData);
        }
        
    };

    useEffect(() => {
        if (data.length == 0)
            fetchData()
    }, [])

    //Handle Random Routes
    useEffect(() => {
        console.log('Route Data');
        console.log(routeData);
        if(routeData.length > 0){
            console.log('Handle Random Routes');
            setPolylinePath(routeData.map(coord => ({
                lat: coord[0],
                lng: coord[1]
            })));

        }
    }, [routeData]);

    const center = {
        lat: -20.305184,
        lng: 57.45645
    };
    const position = {
        lat:-20.300684,
        lng: 57.457623
    };

    const options = {
        // disableDefaultUI: false, disable zoom and fullscreen controls
        // gestureHandling: 'none'  disable scrolling and dragging the map
    };

    const markerOptions = {
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        },
    };
    const highlightedMarkerOptions = {
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        },
    };

    function handleClick(index: any) {
        // let coordinate: any = [event.latLng.lat(), event.latLng.lng()]
        let coordinate = data[index]
        selectedMarkers.push(coordinate)
        setSelectedMarker(selectedMarkers);
        forceUpdate();
    }
    
    const handleSelectedSubmit = () => {
        console.log(formDataSelected);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataSelected)
          };
      
        fetch('http://192.168.100.52:5000/find_shortest_route', requestOptions)
        .then(response => response.json())
        .then(dataSelected => {
                setRouteData(dataSelected)
            })
        .catch(error => console.log(error));
    }

    const handleManualSubmitSelected = () => {
        console.log('Clicked');

        //console.log(result)
        setFormDataSelected(
            selectedMarkers
        );
    };

    useEffect(() => {
        console.log('Form data');
        console.log(formDataSelected);
        
        if(formDataSelected.length > 0){
            console.log('Handling Submit');
            handleSelectedSubmit();
        }
            
    }, [formDataSelected]);

    useEffect(() => {
        console.log(selectedMarkers)
        if (selectedMarkers.length > 0){
            console.log(selectedMarkers)
            const newRenderedMarkersList = selectedMarkers.map((coord, index) => (
                <li key={index}>{index}</li>
            ))

            console.log(newRenderedMarkersList)
            setRenderedSelectedMarkersList(newRenderedMarkersList);
            forceUpdate();
        }
    },[selectedMarkers]);

    const toggleHighlightedMarker = (index: any) => {
        console.log(index)
        let highlightedMarkerCoordinate = routeData[index];
        setHighlightedMarker(highlightedMarkerCoordinate);

    }

    return (
        <div className='w-full h-screen main-container-dhss absolute'>
            <LoadScript
                googleMapsApiKey="AIzaSyBcPGcOqzXqRzhzeJ9ZitAAgyYv77iT4qI"
            >
                <div className="w-screen h-full absolute z-1 map-container">
                    
                    <GoogleMap
                        id="marker-example"
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                        options={options}
                    >
                    { /* Child components, such as markers, info windows, etc. */ }
                        {data.map((coord, index) => (
                            <MarkerF onClick={() => handleClick(index)} key={index} title={coord[0] + ',' + coord[1]} position={{ lat: coord[0], lng: coord[1] }} />
                        ))}

                        {routeData[0].length > 0 && routeData.map((coord, index) => (
                            <MarkerF options={markerOptions} key={index}  title={coord[0] + ',' + coord[1]} position={{ lat: coord[0], lng: coord[1] }} />
                        ))}

                        {routeData[0].length > 0 && routeData.map((coord, index) => (
                            <MarkerF options={markerOptions} key={index} title={coord[0] + ',' + coord[1]} position={{ lat: coord[0], lng: coord[1] }} />
                        ))}
                        {(highlightedMarker.length && highlightedMarker != undefined) > 0 && 
                            <MarkerF options={highlightedMarkerOptions} position={{ lat: highlightedMarker[0], lng: highlightedMarker[1] }} />
                        }

                        {renderedSelectedMarkers}

                        {routeData[0].length > 0 && <Polyline
                        path={polylinePath}
                        options={{
                            strokeColor: "#FF0000",
                            strokeOpacity: 1,
                            strokeWeight: 2,
                            clickable: false,
                            draggable: false,
                            editable: false,
                            visible: true,
                            zIndex: 1
                        }}
                        />}

                    </GoogleMap>
                    <div className='absolute text-black z-30 top-16 right-5 rounded-3xl shadow-lg bg-white p-5 '>
                        <ul className='flex items-center flex-col'>
                            <strong>Shortest Route Fields Coordinates</strong>
                            {routeData[0].length > 0 && routeData.map((coordinate, index) => {
                                return (
                                    <li className='p-1 w-full flex justify-center rounded transition-all hover:cursor-pointer hover:bg-black hover:text-white' onClick={() => toggleHighlightedMarker(index)} key={index}>{index + 1} # {coordinate[0]}, {coordinate[1]}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='absolute  text-black z-30 top-20 left-5 rounded-3xl shadow-lg bg-white p-5 '>
                        <ul className='flex items-center flex-col'>
                            <strong>Click fields marker to add</strong>
                            {selectedMarkers.map((coordinate, index) => {
                                return (
                                    <li className='p-1 w-full flex justify-center rounded transition-all hover:cursor-pointer hover:bg-black hover:text-white' onClick={() => toggleHighlightedMarker(index)} key={index}>{index + 1} # {coordinate[0]}, {coordinate[1]}</li>
                                )
                            })}

                            <li><button className='rounded-full bg-green-600 text-white border-solid border-2 border-black mt-2 px-3 py-1 w-full transition-all hover:bg-green-400' onClick={handleManualSubmitSelected}>Submit</button></li>
                        </ul>
                    </div>

                    <div className='absolute text-black z-30 bottom-40 left-5 rounded-3xl shadow-lg bg-white overflow-hidden'>
                        <Image className='w-60 object-cover xl:w-32' src="/logo.jpg" width={200} height={200} alt="" />
                    </div>
                    
                </div>
                
            </LoadScript>
            {data.length > 0 && <Menu onChildData={handleChildData} coordinates={data} onReset={clearShortestRoute}/>}

            
        </div>
    )
}

export default React.memo(Maps)