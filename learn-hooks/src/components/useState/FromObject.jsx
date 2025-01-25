import { useState } from "react"

export default function FromObject(){
    const [form, setForm] = useState({
        firstName: 'Sohel',
        lastName: 'Rana',
        email: 'sohel@gmail.com'
    });
    return(
        <>
            <label>
                First Name: 
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <br />
            <label>
                Last Name: 
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <br />
            <label>
                Email: 
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <br />

            <p>{form.firstName}{' '} {form.lastName}{' '}{form.email}</p>
        </>
    )    
}
