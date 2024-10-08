import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    skills: [
        {
            label: {
                type: String,
                required: true
            },
            range: {
                type: String,
                required: true
            }
        }
    ],
    languages: [
        {
            label: {
                type: String,
                required: true
            },
            range: {
                type: String,
                required: true
            }
        }
    ],
    experience: [
        {
            job: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    education: [
        {
            institute: {
                type: String,
                required: true
            },
            qualification: {
                type: String,
                required: true
            }
        }
    ]
});

const CVModel = mongoose.model('cv', cvSchema, 'cv');

export default CVModel;