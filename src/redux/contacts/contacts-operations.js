import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchGetAllContacts, fetchAddContact, fetchDeleteContact } from "../../services/contacts";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const data = await fetchGetAllContacts();
            return data;
        }
        catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, thunkAPI) => {
        try {
            const result = await fetchAddContact(data);
            return result;
        }
        catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data);
        }
    },
    {
        condition: ({name, phone}, { getState }) => {
            const { contacts } = getState();
            const normalizedName = name.toLowerCase();
            const normalizedNumber = phone.toLowerCase();
            const result = contacts.items.find(({ name, phone }) => {
               return (name.toLowerCase() === normalizedName || phone.toLowerCase() === normalizedNumber );
            })
            if (result) {
                alert(`Name: "${name}" or number: "${phone}" is already in contacts, please check the contacts list`);
                return false;
            }
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            await fetchDeleteContact(id);
            return id;
        }
        catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)
