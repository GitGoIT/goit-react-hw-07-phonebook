import axios from "axios";

const contactsInstance = axios.create({
    baseURL: 'https://6405c7fb40597b65de40def7.mockapi.io/api/contacts',
})

export const fetchGetAllContacts = async () => {
    const { data } = await contactsInstance.get("/");
    console.log(data)   // delete
    return data;
}

export const fetchAddContact = async (data) => {
    const { data: result } = await contactsInstance.post("/", data);
    return result;
}

export const fetchDeleteContact = async (id) => {
    const { data } = await contactsInstance.delete(`/${id}`);
    return data;
}