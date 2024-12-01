import { useSearchParams } from "react-router-dom";

export const SendMoney = () => {
    const [searchParams] = useSearchParams
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,setAmount] = useState(0);

    return <div>
        <div>
            <div>
                <div>
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div>
                    <div>
                        <div>
                            <span>{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                    </div>
                    <div>
                        <div>
                            <label className=""
                                   for="amount" >
                                    Amount (in Rs)
                            </label>
                            <input onChange={e => {
                                setAmount(e.target.value)
                            }}
                                   type="number"
                                   className=""
                                   id="ampunt"
                                   placeholder="Enter Amount" />
                        </div>
                        <button onClick={() => {
                            axios.post("http://localhost:3000/api/v1/account/transfer", {
                                to : id,
                                amount
                            },{
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            })
                        }} className="">Initiate Transfer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
