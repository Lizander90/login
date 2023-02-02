import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GLobalContext } from '../../../context'


const handleGetData = async ({ userData }) => {
    try {
        console.log('---------entrando al get----------')
        console.log(userData.currentToken)

        axios.defaults.headers.common = { 'Authorization': `Bearer ${userData.currentToken}` }
        // axios.defaults.headers.common = {
        //     'Authorization': 'Bearer ' + userData.currentToken
        // };
        const req = await (await axios.get('http://localhost:3001/data/2')).data
        return req;

    } catch (e) {
        console.info(' error al cagar los datos en el GET request')
    }

}

const ListUser = () => {
    // userdata {user currentToken}
    const { userData } = useContext(GLobalContext)
    const [dataList, setDataList] = useState({ currentUserLogged: '', data: [] })


    handleGetData({ userData }).then((data) => {
        console.log('datos del get ----------')
        console.log(data)
        if (dataList.currentUserLogged != data.currentUserLogged) { //se me carga el componente 2 veces xD
            setDataList(data)
        }
    })


    return <>
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
                {userData.user}
            </div>
            <ul className="list-group list-group-flush">
                {
                    dataList.data.length && <>
                        {
                            dataList.data.map((itemX) => {
                                return <li key={itemX.id} className='list-group-item'> {itemX.userName} </li>
                            })
                        }
                    </>
                }

            </ul>
        </div>
    </>
}

export default ListUser
