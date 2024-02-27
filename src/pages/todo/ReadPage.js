import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ReadPage(props) {

    const navigate = useNavigate()
    const {tno} = useParams()

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const qryStr = create

    console.log(tno);

    const moveToModify = (tno) => {

        navigate({pathname: `/todo/modify/${tno}`})
    }


    return (
        <div className={' text-3xl'}>
            Todo Read Page {tno}

            <div>
                <button onClick={() => moveToModify(tno)}>Test Modify</button>
            </div>
        </div>
    );
}

export default ReadPage;