// import Autocomplete from "@mui/joy/Autocomplete";
// import AutocompleteOption from "@mui/joy/AutocompleteOption";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import Typography from "@mui/joy/Typography";
// import { AspectRatio } from "@mui/joy";
// import cities from "../../cities";
// import { useState } from "react";

// export function CitySelector() {
//   return (
//     <FormControl>
//       <FormLabel>Chọn Thành Phố</FormLabel>
//       <Autocomplete
//         size="sm"
//         autoHighlight
//         isOptionEqualToValue={(option, value) => option.code === value.code}
//         defaultValue={cities.find((city) => city.code === "HCM")}
//         options={cities}
//         renderOption={(optionProps, option) => (
//           <AutocompleteOption {...optionProps}>
//             <ListItemDecorator>
//               {/* <AspectRatio ratio="1" sx={{ minWidth: 20, borderRadius: "50%" }}>
//                 <img
//                   loading="lazy"
//                   width="20"
//                   src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_Vietnam.svg"
//                   alt=""
//                 />
//               </AspectRatio> */}
//             </ListItemDecorator>
//             {option.label}
//             <Typography
//               component="span"
//               textColor="text.tertiary"
//               sx={{ ml: 0.5 }}
//             >
//               ({option.code})
//             </Typography>
//           </AutocompleteOption>
//         )}
//         slotProps={{
//           input: {
//             autoComplete: "new-password",
//           },
//         }}
//       />
//     </FormControl>
//   );
// }

// export function LocationSelector() {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");

//   // Lấy danh sách huyện/quận dựa trên thành phố đã chọn
//   const districts =
//     cities.find((city) => city.value === selectedCity)?.districts || [];

//   return (
//     <div className="p-4 space-y-4">
//       {/* Chọn Thành Phố */}
//       <div>
//         <label className="block text-sm font-medium">Chọn Thành Phố</label>
//         <select
//           className="w-full border rounded-lg p-2 mt-1"
//           value={selectedCity}
//           onChange={(e) => {
//             setSelectedCity(e.target.value);
//             setSelectedDistrict(""); // Reset huyện/quận khi đổi thành phố
//           }}
//         >
//           <option value="">-- Chọn thành phố --</option>
//           {cities.map((city) => (
//             <option key={city.value} value={city.value}>
//               {city.label}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Chọn Huyện/Quận (Chỉ hiện nếu đã chọn thành phố) */}
//       {selectedCity && (
//         <div>
//           <label className="block text-sm font-medium">Chọn Quận/Huyện</label>
//           <select
//             className="w-full border rounded-lg p-2 mt-1"
//             value={selectedDistrict}
//             onChange={(e) => setSelectedDistrict(e.target.value)}
//           >
//             <option value="">-- Chọn quận/huyện --</option>
//             {districts.map((district) => (
//               <option key={district.value} value={district.value}>
//                 {district.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import cities from "../../cities";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function LocationSelector() {
  const [selectedCity, setSelectedCity] = useState(
    cities.find((city) => city.code === "HCM")
  );
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const districts = selectedCity ? selectedCity.districts : [];

  return (
    <div className="space-y-4 w-full">
      {/* Chọn Thành Phố */}
      <FormControl fullWidth>
        <FormLabel className="text-sm font-medium text-gray-700">
          Chọn Thành Phố
        </FormLabel>
        <Autocomplete
          size="small"
          autoHighlight
          value={selectedCity}
          onChange={(event, newValue) => {
            setSelectedCity(newValue);
            setSelectedDistrict(null);
          }}
          options={cities}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.code === value?.code}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Chọn thành phố"
              className="rounded-lg"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: "14px",
                  padding: "8px",
                },
              }}
            />
          )}
        />
      </FormControl>

      {/* Chọn Quận/Huyện */}
      {selectedCity && (
        <FormControl fullWidth>
          <FormLabel className="text-sm font-medium text-gray-700">
            Chọn Quận/Huyện
          </FormLabel>
          <Autocomplete
            size="small"
            autoHighlight
            value={selectedDistrict}
            onChange={(event, newValue) => setSelectedDistrict(newValue)}
            options={districts}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.code === value?.code
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Chọn quận/huyện"
                className="rounded-lg"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontSize: "14px",
                    padding: "8px",
                  },
                }}
              />
            )}
            disabled={!districts.length}
          />
        </FormControl>
      )}
    </div>
  );
}
