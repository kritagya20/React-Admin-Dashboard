import "./widgetLg.css";
import UserImg2 from "../widgetSm/img2.jpg";
import UserImg4 from "../widgetSm/img4.jpg";
import UserImg5 from "../widgetSm/img5.jpg";
import UserImg6 from "../widgetSm/img6.jpg";
import UserImg7 from "../widgetSm/img7.jpg";

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton" + type}> {type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={UserImg2} className="widgetLgImg" />
            <span className="widgetLgName">Anna Keller</span>
          </td>
          <td className="widgetLgDate">20 Oct 2022</td>
          <td className="widgetLgAmount">₹120.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={UserImg4} className="widgetLgImg" />
            <span className="widgetLgName">Ananya Rathore</span>
          </td>
          <td className="widgetLgDate">8 Sep 2022</td>
          <td className="widgetLgAmount">₹220.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={UserImg5} className="widgetLgImg" />
            <span className="widgetLgName">Kamlesh Pandey </span>
          </td>
          <td className="widgetLgDate">2 Sep 2022</td>
          <td className="widgetLgAmount">₹122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={UserImg6} className="widgetLgImg" />
            <span className="widgetLgName">Anna Keller</span>
          </td>
          <td className="widgetLgDate">15 Aug 2022</td>
          <td className="widgetLgAmount">₹300.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={UserImg7} className="widgetLgImg" />
            <span className="widgetLgName">Priyank Verma</span>
          </td>
          <td className="widgetLgDate">10 Aug 2022</td>
          <td className="widgetLgAmount">₹250.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
      </table>
    </div>
  )
}
