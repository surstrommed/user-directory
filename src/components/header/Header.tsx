"use client";

import { Col, Row, Layout, Button, Form } from "antd";
import Link from "next/link";
import { styles } from ".";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PROJECT_NAME, ROUTES, SEARCH_QUERY } from "@consts/index";
import Search from "antd/es/input/Search";
import { urlBuilder } from "@lib/utils";

type FormFields = {
  [SEARCH_QUERY]: string;
};

const Header = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const searchQuery = params.get(SEARCH_QUERY);
  const [searchForm] = Form.useForm<FormFields>();

  const onSearch = (value: string) => {
    const formattedValue = value.trim();

    const url = window.location.href;
    let resultUrl = "";

    if (formattedValue) {
      resultUrl = urlBuilder(url, SEARCH_QUERY, "add", formattedValue);
    }
    if (!formattedValue && searchQuery) {
      resultUrl = urlBuilder(url, SEARCH_QUERY, "remove");
    }

    push(resultUrl);
  };

  return (
    <Layout.Header style={styles.header}>
      <Row style={styles.rowContainer}>
        <Col span={6} style={styles.headerItemContainer}>
          <Link href={ROUTES.main} style={styles.logo}>
            {PROJECT_NAME}
          </Link>
        </Col>
        <Col span={18} style={styles.listContainer}>
          <Form
            form={searchForm}
            initialValues={{ [SEARCH_QUERY]: searchQuery || "" }}
            autoComplete="off"
            style={styles.searchForm}
          >
            <Form.Item<FormFields>
              name={SEARCH_QUERY}
              style={styles.searchContainer}
            >
              <Search
                placeholder="Search by username"
                allowClear
                onSearch={onSearch}
                style={styles.searchField}
              />
            </Form.Item>
          </Form>
          {pathname !== ROUTES.main && (
            <Button
              type="primary"
              onClick={() => {
                push(ROUTES.main);
              }}
            >
              All users
            </Button>
          )}
          {pathname !== ROUTES.posts && (
            <Button
              type="primary"
              onClick={() => {
                push(ROUTES.posts);
              }}
            >
              All posts
            </Button>
          )}
          {pathname !== ROUTES.albums && (
            <Button
              type="primary"
              onClick={() => {
                push(ROUTES.albums);
              }}
            >
              All albums
            </Button>
          )}
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
