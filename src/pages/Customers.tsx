import React from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import CustomersTable from "../components/tables/Customers";
import useRouter from "../hooks/router";
import LayoutWithSidebar from "../components/layout/LayoutWithSidebar"


interface Props {}

const Customers = (props: Props) => {
  const router = useRouter();
  const data = React.useMemo(
    () => [
      {
        id: 1,
        first_name: "Phillipp",
        last_name: "Stathers",
        name: "Phillipp Stathers",
        phone: "386-802-8147",
        email: "pstathers0@barnesandnoble.com",
        ticket_status: "Closed",
        last_ticket_created: "7/22/2020",
      },
      {
        id: 2,
        first_name: "Kessiah",
        last_name: "Arnholtz",
        name: "Kessiah Arnholtz",
        phone: "180-934-6307",
        email: "karnholtz1@shutterfly.com",
        ticket_status: "Overdue",
        last_ticket_created: "1/12/2020",
      },
      {
        id: 3,
        first_name: "Foster",
        last_name: "McCaughen",
        name: "Foster McCaughen",
        phone: "378-643-0169",
        email: "fmccaughen2@engadget.com",
        ticket_status: "Open",
        last_ticket_created: "5/15/2020",
      },
      {
        id: 4,
        first_name: "Alvira",
        last_name: "Linden",
        name: "Alvira Linden",
        phone: "980-478-9100",
        email: "alinden3@craigslist.org",
        ticket_status: "Open",
        last_ticket_created: "10/13/2020",
      },
      {
        id: 5,
        first_name: "Ulrica",
        last_name: "Sieghard",
        name: "Ulrica Sieghard",
        phone: "979-461-3939",
        email: "usieghard4@reuters.com",
        ticket_status: "Overdue",
        last_ticket_created: "7/2/2020",
      },
      {
        id: 6,
        first_name: "Joeann",
        last_name: "Thyng",
        name: "Joeann Thyng",
        phone: "155-332-5760",
        email: "jthyng5@gnu.org",
        ticket_status: "Open",
        last_ticket_created: "1/16/2020",
      },
      {
        id: 7,
        first_name: "Ignacius",
        last_name: "VanBrugh",
        name: "Ignacius VanBrugh",
        phone: "158-526-3037",
        email: "ivanbrugh6@cloudflare.com",
        ticket_status: "Overdue",
        last_ticket_created: "3/26/2020",
      },
      {
        id: 8,
        first_name: "Austin",
        last_name: "Dunston",
        name: "Austin Dunston",
        phone: "180-608-0992",
        email: "adunston7@netlog.com",
        ticket_status: "Open",
        last_ticket_created: "12/12/2019",
      },
      {
        id: 9,
        first_name: "Joice",
        last_name: "Conradie",
        name: "Joice Conradie",
        phone: "239-285-1247",
        email: "jconradie8@so-net.ne.jp",
        ticket_status: "Open",
        last_ticket_created: "1/9/2020",
      },
      {
        id: 10,
        first_name: "Gaby",
        last_name: "Ortner",
        name: "Gaby Ortner",
        phone: "304-584-7243",
        email: "gortner9@hp.com",
        ticket_status: "Closed",
        last_ticket_created: "1/23/2020",
      },
      {
        id: 11,
        first_name: "Sonnie",
        last_name: "Townsend",
        name: "Sonnie Townsend",
        phone: "730-194-6069",
        email: "stownsenda@ihg.com",
        ticket_status: "Open",
        last_ticket_created: "12/6/2019",
      },
      {
        id: 12,
        first_name: "Atalanta",
        last_name: "Collete",
        name: "Atalanta Collete",
        phone: "685-351-1741",
        email: "acolleteb@cbsnews.com",
        ticket_status: "Open",
        last_ticket_created: "12/11/2019",
      },
      {
        id: 13,
        first_name: "Bald",
        last_name: "Amsberger",
        name: "Bald Amsberger",
        phone: "167-965-0937",
        email: "bamsbergerc@123-reg.co.uk",
        ticket_status: "Overdue",
        last_ticket_created: "8/12/2020",
      },
      {
        id: 14,
        first_name: "Lisbeth",
        last_name: "Vanyutin",
        name: "Lisbeth Vanyutin",
        phone: "317-189-5122",
        email: "lvanyutind@yellowbook.com",
        ticket_status: "Open",
        last_ticket_created: "7/18/2020",
      },
      {
        id: 15,
        first_name: "Rosalinde",
        last_name: "Humbie",
        name: "Rosalinde Humbie",
        phone: "104-381-7226",
        email: "rhumbiee@php.net",
        ticket_status: "Overdue",
        last_ticket_created: "9/3/2020",
      },
      {
        id: 16,
        first_name: "Tyrone",
        last_name: "Halden",
        name: "Tyrone Halden",
        phone: "561-897-9676",
        email: "thaldenf@eventbrite.com",
        ticket_status: "Open",
        last_ticket_created: "7/6/2020",
      },
      {
        id: 17,
        first_name: "Judie",
        last_name: "Sainteau",
        name: "Judie Sainteau",
        phone: "611-466-2584",
        email: "jsainteaug@bandcamp.com",
        ticket_status: "Closed",
        last_ticket_created: "3/2/2020",
      },
      {
        id: 18,
        first_name: "Zachery",
        last_name: "Heinl",
        name: "Zachery Heinl",
        phone: "978-294-6682",
        email: "zheinlh@themeforest.net",
        ticket_status: "Overdue",
        last_ticket_created: "11/14/2020",
      },
      {
        id: 19,
        first_name: "Devora",
        last_name: "Latchmore",
        name: "Devora Latchmore",
        phone: "910-235-8912",
        email: "dlatchmorei@privacy.gov.au",
        ticket_status: "Overdue",
        last_ticket_created: "3/24/2020",
      },
      {
        id: 20,
        first_name: "Cariotta",
        last_name: "Hodjetts",
        name: "Cariotta Hodjetts",
        phone: "834-704-5548",
        email: "chodjettsj@mac.com",
        ticket_status: "Closed",
        last_ticket_created: "5/20/2020",
      },
      {
        id: 21,
        first_name: "Kyle",
        last_name: "Bottlestone",
        name: "Kyle Bottlestone",
        phone: "270-842-9347",
        email: "kbottlestonek@cbc.ca",
        ticket_status: "Closed",
        last_ticket_created: "3/19/2020",
      },
      {
        id: 22,
        first_name: "Mahalia",
        last_name: "Odger",
        name: "Mahalia Odger",
        phone: "825-232-4484",
        email: "modgerl@time.com",
        ticket_status: "Closed",
        last_ticket_created: "8/20/2020",
      },
      {
        id: 23,
        first_name: "Maybelle",
        last_name: "Mouatt",
        name: "Maybelle Mouatt",
        phone: "777-295-8999",
        email: "mmouattm@npr.org",
        ticket_status: "Closed",
        last_ticket_created: "4/20/2020",
      },
      {
        id: 24,
        first_name: "Deloria",
        last_name: "Sparkwill",
        name: "Deloria Sparkwill",
        phone: "724-275-9803",
        email: "dsparkwilln@cyberchimps.com",
        ticket_status: "Open",
        last_ticket_created: "1/4/2020",
      },
      {
        id: 25,
        first_name: "Sondra",
        last_name: "Lovel",
        name: "Sondra Lovel",
        phone: "345-273-0347",
        email: "slovelo@clickbank.net",
        ticket_status: "Open",
        last_ticket_created: "10/24/2020",
      },
      {
        id: 26,
        first_name: "Ronnie",
        last_name: "Fenne",
        name: "Ronnie Fenne",
        phone: "772-997-7834",
        email: "rfennep@i2i.jp",
        ticket_status: "Open",
        last_ticket_created: "12/19/2019",
      },
      {
        id: 27,
        first_name: "Mersey",
        last_name: "Laden",
        name: "Mersey Laden",
        phone: "889-644-4777",
        email: "mladenq@stumbleupon.com",
        ticket_status: "Overdue",
        last_ticket_created: "5/20/2020",
      },
      {
        id: 28,
        first_name: "Oates",
        last_name: "Mackrill",
        name: "Oates Mackrill",
        phone: "639-251-7222",
        email: "omackrillr@comsenz.com",
        ticket_status: "Overdue",
        last_ticket_created: "2/10/2020",
      },
      {
        id: 29,
        first_name: "Lexine",
        last_name: "Jales",
        name: "Lexine Jales",
        phone: "971-288-4142",
        email: "ljaless@4shared.com",
        ticket_status: "Closed",
        last_ticket_created: "9/24/2020",
      },
      {
        id: 30,
        first_name: "Rubi",
        last_name: "Beard",
        name: "Rubi Beard",
        phone: "425-548-5141",
        email: "rbeardt@imgur.com",
        ticket_status: "Overdue",
        last_ticket_created: "7/28/2020",
      },
      {
        id: 31,
        first_name: "Kristoforo",
        last_name: "Tumasian",
        name: "Kristoforo Tumasian",
        phone: "959-741-0800",
        email: "ktumasianu@imageshack.us",
        ticket_status: "Closed",
        last_ticket_created: "2/26/2020",
      },
      {
        id: 32,
        first_name: "Timoteo",
        last_name: "Knott",
        name: "Timoteo Knott",
        phone: "142-626-3193",
        email: "tknottv@163.com",
        ticket_status: "Open",
        last_ticket_created: "12/3/2019",
      },
      {
        id: 33,
        first_name: "Rufus",
        last_name: "Center",
        name: "Rufus Center",
        phone: "678-640-8908",
        email: "rcenterw@usda.gov",
        ticket_status: "Open",
        last_ticket_created: "9/24/2020",
      },
      {
        id: 34,
        first_name: "Abie",
        last_name: "Miettinen",
        name: "Abie Miettinen",
        phone: "777-955-8363",
        email: "amiettinenx@opera.com",
        ticket_status: "Open",
        last_ticket_created: "5/14/2020",
      },
      {
        id: 35,
        first_name: "Mandel",
        last_name: "Tuckley",
        name: "Mandel Tuckley",
        phone: "826-685-3062",
        email: "mtuckleyy@nsw.gov.au",
        ticket_status: "Closed",
        last_ticket_created: "7/27/2020",
      },
      {
        id: 36,
        first_name: "Wolf",
        last_name: "Perks",
        name: "Wolf Perks",
        phone: "104-835-9196",
        email: "wperksz@intel.com",
        ticket_status: "Overdue",
        last_ticket_created: "1/24/2020",
      },
      {
        id: 37,
        first_name: "Ethan",
        last_name: "Dufoure",
        name: "Ethan Dufoure",
        phone: "191-693-2009",
        email: "edufoure10@meetup.com",
        ticket_status: "Open",
        last_ticket_created: "11/8/2020",
      },
      {
        id: 38,
        first_name: "Marylin",
        last_name: "Packman",
        name: "Marylin Packman",
        phone: "623-121-4432",
        email: "mpackman11@t-online.de",
        ticket_status: "Open",
        last_ticket_created: "4/7/2020",
      },
      {
        id: 39,
        first_name: "Otho",
        last_name: "Ruck",
        name: "Otho Ruck",
        phone: "314-418-8831",
        email: "oruck12@disqus.com",
        ticket_status: "Open",
        last_ticket_created: "11/17/2020",
      },
      {
        id: 40,
        first_name: "Wilow",
        last_name: "Duggary",
        name: "Wilow Duggary",
        phone: "472-935-7258",
        email: "wduggary13@symantec.com",
        ticket_status: "Open",
        last_ticket_created: "12/22/2019",
      },
      {
        id: 41,
        first_name: "Eugenio",
        last_name: "Fursland",
        name: "Eugenio Fursland",
        phone: "108-935-0593",
        email: "efursland14@bloomberg.com",
        ticket_status: "Open",
        last_ticket_created: "8/22/2020",
      },
      {
        id: 42,
        first_name: "Brig",
        last_name: "Gatheral",
        name: "Brig Gatheral",
        phone: "950-422-2831",
        email: "bgatheral15@liveinternet.ru",
        ticket_status: "Overdue",
        last_ticket_created: "8/31/2020",
      },
      {
        id: 43,
        first_name: "Hermie",
        last_name: "McCard",
        name: "Hermie McCard",
        phone: "413-956-6989",
        email: "hmccard16@wisc.edu",
        ticket_status: "Open",
        last_ticket_created: "8/23/2020",
      },
      {
        id: 44,
        first_name: "Sibilla",
        last_name: "Halwood",
        name: "Sibilla Halwood",
        phone: "162-451-3416",
        email: "shalwood17@gravatar.com",
        ticket_status: "Open",
        last_ticket_created: "6/29/2020",
      },
      {
        id: 45,
        first_name: "Georgie",
        last_name: "Telford",
        name: "Georgie Telford",
        phone: "874-155-2883",
        email: "gtelford18@bigcartel.com",
        ticket_status: "Open",
        last_ticket_created: "3/25/2020",
      },
      {
        id: 46,
        first_name: "Madelon",
        last_name: "Faier",
        name: "Madelon Faier",
        phone: "129-406-3058",
        email: "mfaier19@ed.gov",
        ticket_status: "Closed",
        last_ticket_created: "7/23/2020",
      },
      {
        id: 47,
        first_name: "Ginger",
        last_name: "Smaridge",
        name: "Ginger Smaridge",
        phone: "422-825-9868",
        email: "gsmaridge1a@seesaa.net",
        ticket_status: "Open",
        last_ticket_created: "7/18/2020",
      },
      {
        id: 48,
        first_name: "Sam",
        last_name: "Hacquel",
        name: "Sam Hacquel",
        phone: "214-912-5873",
        email: "shacquel1b@ameblo.jp",
        ticket_status: "Open",
        last_ticket_created: "4/26/2020",
      },
      {
        id: 49,
        first_name: "Jacky",
        last_name: "Andryushchenko",
        name: "Jacky Andryushchenko",
        phone: "109-464-0760",
        email: "jandryushchenko1c@ustream.tv",
        ticket_status: "Overdue",
        last_ticket_created: "4/6/2020",
      },
      {
        id: 50,
        first_name: "Irma",
        last_name: "Rummings",
        name: "Irma Rummings",
        phone: "354-515-2563",
        email: "irummings1d@mapy.cz",
        ticket_status: "Closed",
        last_ticket_created: "11/16/2020",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Ticket Status",
        accessor: "ticket_status",
      },
      {
        Header: "Last Ticket Created",
        accessor: "last_ticket_created",
      },
    ],
    []
  );
  return (
    <LayoutWithSidebar>
      <PageHeader>
        <span className="textstyle-header flex-1">Customers</span>
        <Button variant="secondary">Import Customers</Button>
        <Button
          onClick={(e) => router.push("/customers/create")}
          variant="primary"
          className="ml-2"
        >
          Create Customer
        </Button>
      </PageHeader>
      <PageHeader>
        <TextInput
          className="w-searchBar"
          icon="search"
          placeholder="Search customer"
        ></TextInput>
        <Button className="ml-2" variant="secondary">
          Filters
        </Button>
      </PageHeader>
      <div className="w-full px-8 py-8 flex justify-center">
        <div className="container">
          <CustomersTable
            fetchData={() => console.log("fetch data")}
            pageCount={10}
            columns={columns}
            data={data}
          />
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default Customers;
