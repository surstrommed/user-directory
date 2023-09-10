"use client";

import { SORT_QUERY, SORT_TYPES } from "@consts/index";
import { urlBuilder } from "@lib/utils";
import { TUserSortData } from "@models/users";
import { Form, Select } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type FormFields = TUserSortData;

const UsersSort = () => {
  const { push } = useRouter();
  const params = useSearchParams();
  const [form] = Form.useForm<FormFields>();

  const sortType = params.get(SORT_QUERY) || undefined;

  useEffect(() => {
    if (!sortType && form.getFieldValue(SORT_QUERY)) {
      form.setFieldValue(SORT_QUERY, undefined);
    }
  }, [sortType]);

  const onSort = (filterData: TUserSortData) => {
    const { sort } = filterData;

    let sortPath = window.location.href;

    sortPath = urlBuilder(
      sortPath,
      [sortType ? SORT_QUERY : null].filter(Boolean) as string[],
      "remove"
    );

    if (sort) {
      sortPath = urlBuilder(sortPath, SORT_QUERY, "add", sort);
    }

    push(sortPath);
  };

  const submitHandler = async () => {
    const values = await form.validateFields();

    onSort(values);
  };

  return (
    <Form
      form={form}
      initialValues={{
        [SORT_QUERY]: sortType,
      }}
      layout="vertical"
    >
      <Form.Item<FormFields> name={SORT_QUERY} label="Sort by username">
        <Select
          placeholder="Choose sort type"
          allowClear
          onChange={submitHandler}
        >
          {SORT_TYPES.map((st) => (
            <Select.Option value={st.value} key={st.value}>
              {st.text}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default UsersSort;
