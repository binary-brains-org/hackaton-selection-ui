import { Box } from "@mui/material";

interface ItemData {
  age: number;
  id?: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  role: "Parent" | "Child";
  sex: "M" | "F";
  age_category: "Kid" | "Teen" | "Adult";
  password: string;
  cin: string;
}

interface Props {
  item: ItemData;
}

const SignUpParent = ({ item: { age } }: Props) => {

  return (
    <Box className="mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
      <Box className="px-4 py-3 flex justify-between">
        <Box>
          <h2 className="font-bold text-lg">Sign Up</h2>
          <p className="text-gray-500 text-sm">It's quick and easy.</p>
        </Box>
        <Box className="text-gray-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </Box>
      </Box>
      <hr className="bg-gray-600" />
      <Box className="px-4 pt-3 pb-6 space-y-3">
        <Box className="space-y-4 flex flex-col">
          <input
            type="text"
            placeholder="First name"
            name={"firstname"}
            className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Lastname"
            name={"lastname"}
            className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
          />
        </Box>
        <Box>
          <Box className="text-gray-500 text-lg p-4">
            Role <a href=""> (?) </a>
          </Box>
          <Box className="mt-1 flex space-x-3">
            <label
                htmlFor="child"
                className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
            >
              <span>Kid</span>
              <input type="radio" id="kid" name="role" />
            </label>
            <label
                htmlFor="Kid"
                className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
            >
              <span>Teen</span>
              <input type="radio" id="teen" name="role" />
            </label>
            <label
                htmlFor="Adult"
                className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
            >
              <span>Adult</span>
              <input type="radio" id="adult" name="role" />
            </label>
          </Box>
        </Box>
        <Box>
          <Box className="text-gray-500 text-sm">
            Date of birth <a href=""> (?) </a>
          </Box>
          <Box className="mt-1 flex space-x-3">
            <select
              name="day"
              className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
            >
              <option>{age}</option>
            </select>
            <select
              name="month"
              className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select
              name="year"
              className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
            >
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
              <option>1995</option>
              <option>1996</option>
              <option>1997</option>
              <option>1998</option>
              <option>1999</option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
              <option>2006</option>
              <option>2007</option>
              <option>2008</option>
              <option>2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </Box>
        </Box>
        <Box>
          <input
              type="password"
              placeholder="New password"
              className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
          />
        </Box>
        <Box>
          <Box className="text-gray-500 text-lg p-4">
            Gender <a href=""> (?) </a>
          </Box>
          <Box className="mt-1 flex space-x-3">
            <label
              htmlFor="female"
              className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
            >
              <span>Female</span>
              <input type="radio" id="female" name="gender" />
            </label>
            <label
              htmlFor="male"
              className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
            >
              <span>Male</span>
              <input type="radio" id="male" name="gender" />
            </label>
            <label
              htmlFor="other"
              className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
            >
              <span>Custom</span>
              <input type="radio" id="other" name="gender" />
            </label>
          </Box>
        </Box>
        <Box>
          <input
              type="text"
              placeholder="CIN"
              className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
          />
        </Box>
        <Box>
          <p className="text-gray-600 ">
            People who use our service may have uploaded your contact
            information to Facebook.
            <a
              href=""
              className="hover:text-blue-900 font-medium hover:underline"
            >
              Learn more
            </a>
            .
          </p>
          <p className="text-gray-600 mt-4 text-sm">
            By clicking Sign Up, you agree to our
            <a
              href=""
              className="hover:text-blue-900 font-medium hover:underline"
            >
              Terms
            </a>
            ,
            <a
              href=""
              className="hover:text-blue-900 font-medium hover:underline"
            >
              Privacy Policy
            </a>
            and
            <a
              href=""
              className="hover:text-blue-900 font-medium hover:underline"
            >
              Cookies Policy
            </a>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </p>
        </Box>
        <Box className="text-center">
          <button className="text-white font-bold px-16 py-1 rounded-md bg-green-600 text-white text-lg p-4">
            Sign Up
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export { type ItemData };
export default SignUpParent;
