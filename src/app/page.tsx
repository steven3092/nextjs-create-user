import { Users } from "./components/user/users";
import { QueryClient, dehydrate } from "@tanstack/query-core";
import { fetchUsers } from "./services/get-users";
import { HydrationBoundary } from "@tanstack/react-query";
import { AddUser } from "./components/add-user/add-user";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["get-users"],
    queryFn: fetchUsers,
  });

  // Trigger fetch data with react 19, with use only.
  // const products = use(fetchData());
  // const { data } = use<dataType>(fetchData());

  // Trigger fetch data with react before react 19, with useEffect and useState.
  // const [products, setProducts] = useState<productsType>();
  // useEffect(() => {
  //   fetchData().then((data) => setProducts(data));
  // }, []);

  // React 18
  // const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = new FormData(event.target as HTMLFormElement);
  //   alert(`user ${form.get("firstName")} added`);
  // };

  //In Next
  // const [stateActionAddUser, submitActionAddUser, isPendingActionAddUser] =
  //   useFormState(fetchPostUser, null);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Users />
        <AddUser />
      </HydrationBoundary>
    </>
  );
}
