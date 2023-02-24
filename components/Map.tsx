import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useState, useEffect, useRef } from "react";

const mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN