

import {useState, useEffect} from 'react'

// firebase imports
import {db} from '../firebase/config'
import {collection, getDocs, doc, query, orderBy, deleteDoc} from 'firebase/firestore'



function SalesLog({handleSalesLog}) {
    const [salesLog, setSalesLog] = useState([]);


    const handleDelete = async id => {

      // delete a specific doc record
      const docRef = doc(db, 'sales', id)
      await deleteDoc(docRef)
      console.log('document deleted')

      // fetch collection data minus deleted record
      const colRef = collection(db, 'sales')
      const q = query(colRef, orderBy("time", "desc"))
      getDocs(q)
        .then((snapshot) => {
          let results = []
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
          })
          setSalesLog(results)
        })
    }


  // retrieve any data stored in "sales" collection
  useEffect(() => {
    const colRef = collection(db, 'sales')
    const q = query(colRef, orderBy("time", "desc"))
    getDocs(q)
      .then((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setSalesLog(results)
      })
  }, [])


  return (
    <div className="popup-overlay" onClick={handleSalesLog}>
        <span className="close-popup">&times;</span>
        <div className="popup-inner">
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Total Price</th>
                        <th>Purchase Date</th>
                        <th>Delete Record</th>
                    </tr>
                </thead>
                <tbody>
                        {salesLog && salesLog.map(item => (
                            <tr key={item.id} style={{ backgroundColor: '#b4f5b8' }}>
                                <td>{item.title}</td>
                                <td>${item.total}</td>
                                <td>{item.time}</td>
                                <td><button className='btn-delete' onClick={() => handleDelete(item.id)}>delete record</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SalesLog