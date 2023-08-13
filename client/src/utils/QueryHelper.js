export default ({
  page,
  limit,
  order,
  orderBy,
  status,
  search,
  keyword,
  from,
  to,
  number,
  select
}) => {
  let data = {};
  if (page >= 0) data.page = page;
  if (limit) data.limit = limit;
  if (orderBy) data.orderBy = orderBy;
  if (orderBy && order) data.order = order;
  if (status >= 0 || (status >= 'a' && status <= 'z')) data.status = status;
  if (search) data.search = search;
  if (keyword) data.keyword = keyword;
  if (from) data.from = from;
  if (to) data.to = to;
  if (number >= 0) data.number = number;
  if (select >= 0 || typeof select === 'string') data.select = select;
  return data;
};
