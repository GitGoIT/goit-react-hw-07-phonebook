import axios from "axios";

const contactsInstance = axios.create({
    baseURL: 'https://6407a3c18ee73db92e2e8056.mockapi.io/contacts',
})

export const fetchGetAllContacts = async () => {
    const { data } = await contactsInstance.get("/");
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