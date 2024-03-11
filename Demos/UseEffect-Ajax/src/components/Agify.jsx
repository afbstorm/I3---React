import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Form';

const Agify = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const URL = `https://api.agify.io/?name=${name}&country_id=MA`;

    // const URL = `https://api.agify.io/?name=Elena&country_id=BE`;

    const getAge = async () => {
        try {
            const result = await axios.get(URL);

            if (result) {
                setData(result.data)
            }
        } catch (err) {
            console.error(err)
            setError(err);
        }
    }

    // useEffect(() => {
    //     if (count === 5) {
    //         getAge();
    //     }
    // }, [count])

    useEffect(() => {
        getAge();
    }, [name])

    return (
        <>
            <Form setName={setName} />

            {data ? (
                <h3>le nom {data.name} à {data.age}</h3>
            ) :
            null
            }
            
            <button onClick={() => setCount(count => count + 1)}>
                {count}
            </button>
        </>

    )
}

export default Agify;