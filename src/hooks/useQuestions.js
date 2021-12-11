import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import { db } from '../base';

export const useQuestions = () => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        onSnapshot(
            query(collection(db, 'questions'), orderBy('timestamp', 'desc')), 
                snapshot => {
                    setQuestions(
                        snapshot.docs.map(doc => ({
                            _id: doc.id,
                            ...doc.data()
                        }))
                    )
                }
            )
    }, [])

    return [questions, setQuestions];
}

