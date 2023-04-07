import React, { useState, useEffect } from 'react'
import GraphCompo from '../components/GraphComp';
import TimeButton from '../components/TimeButton'
import LocationComponent from '../components/LocationComponent';
import { getGraphData } from '../utils/graphData';

const GraphComponent = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [data, setData] = useState([]);
    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
      };
    useEffect(() => {
        (async () => {
          const result = await getGraphData();
          console.log(result.data);

          setData(result.data);
        })();
      }, []);

  return (
    <div>
        <div className='flex items-center mb-5'>
            <TimeButton title="1 Day" 
                isActive={activeButton === 1}
                onClick={handleClick}
                buttonNumber={1}/>
            <TimeButton title="3 Days" 
                isActive={activeButton === 2}
                onClick={handleClick}
                buttonNumber={2}/>
            <TimeButton title="7 Day" 
                isActive={activeButton === 3}
                onClick={handleClick}
                buttonNumber={3}/>
            <TimeButton title="30 Days" 
                isActive={activeButton === 4}
                onClick={handleClick}
                buttonNumber={4}/>
            <TimeButton title="1 Month"
                isActive={activeButton === 5}
                onClick={handleClick}
                buttonNumber={5}/>
            <TimeButton title="Custom Date" 
                isActive={activeButton === 6}
                onClick={handleClick}
                buttonNumber={6}/>
        </div>
        <div>
            <GraphCompo/>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='col-span-1'>
                <LocationComponent/>
            </div>
            <div className='col-span-1'>
                <LocationComponent/>
            </div>
        </div>
    </div>
  )
}

export default GraphComponent