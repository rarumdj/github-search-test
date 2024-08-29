import { ChangeEvent, useEffect, useState } from "react";
import { getQueryParams } from "../common/hooks/getQueryParams";
import { useFetch } from "../common/hooks/useFetch";
import ListFilters from "../components/list-filters";
import ResultCard from "../components/result-card";
import Button from "../components/ui/buttons";
import { CheckBox, Input } from "../components/ui/input";

const Home = () => {
  const [inputs, setInputs] = useState({ q: "", type: "users" });
  const [errors, setErrors] = useState<{ q?: string }>({});
  const { useFetchUsers } = useFetch();
  const { data, isPending, isSuccess, mutate, reset, error } = useFetchUsers();

  const params = getQueryParams(window.location.search);

  useEffect(() => {
    // on component mount this run only if we have the query param in the url to make a request to the api
    if (params.q) {
      const payload = {
        q:
          params.type === "users"
            ? params.q
            : `${params.q}+type:${params.type}`,
      };

      mutate(payload);
      setInputs((prev) => ({
        ...prev,
        q: params.q,
        type: params.type || prev.type,
      }));
    }
  }, []);

  // this function is triggered on input changed
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs((inputs) => ({ ...inputs, [name]: value }));

    setErrors((errors) => {
      if (name in errors) {
        return { ...errors, [name]: "" };
      }
      return errors;
    });
  };

  //form validation function
  const validate = () => {
    const newErrors: { q?: string } = {};
    if (!inputs.q.trim()) {
      newErrors.q = "Search query is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //handle submittion of form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //condition to check if form validation went through!
    if (validate()) {
      // this is used to push the query str to url
      const queryString = new URLSearchParams(
        inputs as Record<string, string>
      ).toString();
      window.history.pushState({}, "", `?${queryString}`);

      //conditioned my payload to only append type if its org
      const payload = {
        q:
          inputs.type === "users"
            ? inputs.q
            : `${inputs.q}+type:${inputs.type}`,
      };

      mutate(payload);
    }
  };

  //function here clear the query in the url and reset the api data state
  const handleClearSearch = () => {
    setInputs({ q: "", type: "users" });
    reset();
    window.history.pushState({}, "", window.location.pathname);
  };

  return (
    <div className="h-screen mx-auto max-w-xl p-6">
      <div className="max-w-sm mx-auto">
        <h1 className="font-bold md:text-3xl text-lg text-center mb-4">
          Github search - Test
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            name="q"
            type="search"
            value={inputs.q}
            errorMessage={errors.q}
            onChange={handleOnChange}
            placeholder="Search..."
          />
          <div className="flex flex-wrap gap-3 items-center mt-3">
            <p className="text-sm">Search by</p>
            <CheckBox
              type="radio"
              defaultChecked
              name="type"
              value="users"
              onChange={handleOnChange}
              label="Users"
            />
            <CheckBox
              type="radio"
              name="type"
              value="org"
              onChange={handleOnChange}
              label="Org"
            />
          </div>
          <Button className="mt-3">Search</Button>
        </form>
      </div>

      {!!Object.values(params).length && (
        <ListFilters handleClearSearch={handleClearSearch} params={params} />
      )}

      <ResultCard
        isPending={isPending}
        error={error?.message}
        isSuccess={isSuccess}
        data={data}
      />
    </div>
  );
};

export default Home;
