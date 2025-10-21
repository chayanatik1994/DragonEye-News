
import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch ("/categories.json").then((res)=>
res.json());

