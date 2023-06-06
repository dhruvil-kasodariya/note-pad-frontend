import { Fragment } from "react";
import Footer from "../../componets/footer/footer.componet";
import Navbar from "../../componets/navbar/navbar.componet";
import TextEdditer from "../../componets/textEdditer/text-eddditer.componet";

const AddEditNote = () => {
  return (
    <Fragment>
      <Navbar />
      <form>
        <input />
        <TextEdditer />
      </form>

      <Footer />
    </Fragment>
  );
};
export default AddEditNote;
