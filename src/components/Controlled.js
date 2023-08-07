import { useState } from 'react';

function Controlled(props) {
    const {formData, setFormData} = useState({})


// fetching //

const jservice = async () => {
    const url = `http://jservice.io/api/random`
    const reponse = await fetch(url);
    const data = await reponse.json()
    props.setQuestion(data)
}

const handleSubmit = (event) => {
    event.preventDefualt()
    jservice(formData)
    setFormData({})
}
return <div className='form'>
    <h2>Lets Play</h2>
    <form onSubmit={handleSubmit}>
        <input type="submit" value={"Get Question"}/>
    </form>
</div>
};

export default Controlled;
