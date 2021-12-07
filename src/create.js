import { React } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

function Create(){
const [firstName,setFirstName] = useState('');
const [lastName,setlastName] = useState('');
const [checkbox,setCheckBox] = useState('');

const postData=()=>{
console.log(firstName);
console.log(lastName);
console.log(checkbox);


}



return(
<Form>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'  onChange={(e)=>setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e)=>setlastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckBox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={postData}>Submit</Button>
</Form>
)
}
export default Create;