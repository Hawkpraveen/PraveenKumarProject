import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { View, Title } from "react-native";

const Deit = ({ valus }) => {
  const [data, setdata] = useState([]);
  const [bf, setbf] = useState([]);
  const [lunch, setlunch] = useState([]);
  const [dnr, setdnr] = useState([]);
  const route = useRoute();
  const [i, seti] = useState(route.params["id"]);
  const [r, setr] = useState(0);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const value = { userid: i };
    axios.post(" http://192.168.45.27:5000/viewusers", value).then((res) => {
      setdata(res.data["user"]);
      setbf(res.data["bf"]);
      setlunch(res.data["lunch"]);
      setdnr(res.data["dnr"]);
      setr(1);
    });
  }, []);
  const setex = (r) => {
    if (r === "bf") {
      setvalue(bf);
    } else if (r === "lunch") {
      setvalue(lunch);
    } else if (r === "dnr") {
      setvalue(dnr);
    }
    // });
    setr(2);
  };

  const check = () => {
    if (r === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Loading...</Text>
        </View>
      );
    } else if (r === 1) {
      return (
        <>
          <TouchableOpacity
            style={{
              width: "90%",
              height: 150,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              setex("bf");
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 15,
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "orange",
                  textAlign: "center",
                }}
              >
                Breakfast
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "90%",
              height: 150,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              setex("lunch");
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 15,
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "orange",
                  textAlign: "center",
                }}
              >
                Lunch
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "90%",
              height: 150,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              setex("dnr");
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 15,
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "orange",
                  textAlign: "center",
                }}
              >
                Dinner
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}>
            <Button
              title="Home"
              onPress={() => {
                valus();
              }}
            />
          </View>
        </>
      );
    } else if (r === 2) {
      return (
        <View style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}>
          <Button
            title="back"
            onPress={() => {
              setr(1);
            }}
          />
          {value.map((m) => {
            return (
              <Text
                style={{ fontSize: 30, textAlign: "center", color: "black" }}
              >
                {m}
              </Text>
            );
          })}
        </View>
      );
    }
  };
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        {check()}
        {/* <View
          style={{
            width: "100%",
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 15,
            height: 500,
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center", color: "black" }}>
            {data[1]}
          </Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>{data[2]}</Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>{data[3]}</Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>{data[4]}</Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>{data[5]}</Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>{data[6]}</Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>{data[9]}</Text>
        </View> */}
        {/* <ImageBackground
          source={{
            uri: "https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              width: "100%",
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 15,
              height: 300,
            }}
          >
            <Text style={{ fontSize: 25, textAlign: "center", color: "blue" }}>
              Breakfast
            </Text>
            {bf.map((m) => {
              return (
                <Text
                  style={{ fontSize: 15, textAlign: "center", color: "white" }}
                >
                  {m}
                </Text>
              );
            })}
          </View>
        </ImageBackground>
        <ImageBackground
          source={{
            uri: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/chitra-sendhil1453210035569e39b33b9db.jpeg",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              width: "100%",
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 15,
              height: 300,
            }}
          >
            <Text style={{ fontSize: 25, textAlign: "center", color: "red" }}>
              Lunch
            </Text>
            {lunch.map((m) => {
              return (
                <Text
                  style={{ fontSize: 15, textAlign: "center", color: "white" }}
                >
                  {m}
                </Text>
              );
            })}
          </View>
        </ImageBackground>
        <ImageBackground
          source={{
            uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMWFhUXFxYbGBgYGRcYFxgYGhcXGBgYGhgaHSggGholGxcXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0rLy0vLy0tLy0vLS0tLy0vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMEBBQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABCEAACAQIEBAMGBAUDAQcFAAABAhEAAwQSITEFQVFhBiJxEzKBkaGxQlLB0QcUI3LwM2Lh8RZTgqKys8IkQ3ODkv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAA1EQABAwIDBQcEAQMFAAAAAAABAAIRAyESMUEEUWFx8CKBkaGxwdETMuHxBSMzQhQVQ4Ki/9oADAMBAAIRAxEAPwDMKacDUa08UZJp9OFRG4BqapvxLkgzHryqnODRJW2sc8wAigpr3kHvOo+Mn5Chq4a/cEsWy9hAq7g/D8iZUaTG5jrSj9upgw266FP+NeRLrJHiVkGM5PoppHiVnkzT3Q1bt8HswDmJ1gwBIPKZpXfDyH8RU8tJB+IoQ2+TEIzv4wAErMXmuXn69AOQ7URwmH9np+Ln1rmJ4Oy7Bp1mQdO086baxVxIW6pZOU+8P7W/Q0Zm0sJg5pd+y1CyQDCs3Uza7MNmG4/cdqv8K4gyko8TGv5WU8/+KqQCAymVOx/Qjke1C8Xi4uafhEfqaaJSjJBgrVuQGIG3L0IB/WkDQrhjtklt2M/DkPkKJKa0EJ0SYUtKmzSBqLKcDSmuUpqKJ2almptIioouzSmmE1yoqXTXQ1cFcYgCTAA3JMAfGorUk1zeg2M8QWl0QG4euy/uaC4vi125ozQv5V0H/PxrJeAitpE5rT4riFq3u4J6L5j9NBVL/tCv/dmOuYT8oj61mc1LNWC8ogpNC3GGxSXFzKZH1HYipJrFYPGtbbMp9RyI71qcFjluLmX4jmDRGulBfTw8lcmkDTQ1NzVawnzSphNdqKIRNVsTjgug1PSqmJxhJyJvVzA8PKkNozH4n5UpX2ptIcV0dk2F1c8FXTDXLurHKPj+nOtHgOCrlzEqBrodz3A7UU4dgGUe0FuJAmdRpvlqVsBOZ1mREZt++o5V5+vtjqhiV6Cjs9OiIA91QwzG3IcSj7EeaB0gHTXWKlt4cIcxK5RB0JEqTrM6mmpjFUQRoSZjf1HKuWcrslzKkAwFY6E7z2mpN4KICXNxNtP6XLOMyOM0ZWkCPiQOnzp2JvmfK7DmBlg/5NW+KPZPlC5SFzMrDaJ907GapC0GE7iCTtIjURz6VlztNUQAHtxZFsMVLRmUaS2h39DQziduVICrlJ3MQDvA9dakucTsuRmUhyAJ/CR37etEr1tFiNsoU6eURqD35ioXnG0Em+XPqyG0CHAASM7dZrz8u1knSUMyPsR3BobgbJZ4blqa2vFeHo8lCNRt3/Y1ncDaAB0hgxU+m6/qK7exVi8YHaLifyFAU/6jdUTsmrSmqloVZWuiuMrAauTUYan1aidNImm0qipOBpTXK4ATpUUTprjEAEkgAbkmAPiaFcQ43btSq/1H6A+Qerc/QVm8dj7l0y7T0A0UegrJdCI2kTmj2P8AEKLpaGc/mOi/Abn6UBxeNuXDLsW6DkPQbCq9crKYa0NyTppTXK5VQrXZpTXK5NUQonTU2FxTW2zKdfoR0NVppTUyUWz4fj1urI0PMcxVuaw+FxDIwZdx9exrVYDGrdWRvzHSiNdKXeyLjJX5pUwGlWkNBcDhVQa6kif8+Va3hVkC0bwXzExtovSe3WgBxoycvLrBXXXl86L8MsYq+i/yeY6ZmGgGpI56biINeXqsfUILtV7BlWkMVJpgt323fKutxZgCIOYCJ0I+VSYW3dum2LeruQNzseZA6fpUVjheOchLlkg+65yGF76b/Ct74evYPCWFtpeRozMzaTOpbNzWIiD0ipQ2bGYdYb+9Cr7U2l9sE7uG/ksInCCrMkh2/qEgAT5AZjSRtTsFZTNluCIEkEH5itJw3FKuJfFoVuhwVyKPMksxZ+sEBRr3qLxIFe9ms5YI8wEeV9ZBI29KramMDXEESD5GIvkeMZExdLfxrqrey6YdJHWk57uKxXHoF4OrjJlyfDUwO2pqQ4kEwogZQBDaj5dfjVbiBtq8XAcuaTrsJ1gfOth4t4PbXBLi8MrW4CHKdTkeBHMAiRtPOqp0XVKeIacf2nnbSym8U3HP335QgeAwCZxcuOiW8wC6kljz5f5FEeL+JLC2/Z2v6h5xsI79axly/du5UICBQSIHmM6UQPByiB4kZZMQd/zdKFW2X6jhUqaGwEWE2+VnZXUgcDXTETxMC58LCbCIVi5dLMtwKyDqsD60AzEXXDbss/EN+xNGrZCgMS2UgAiO+4NCOM3wbysABoy6c9Jmnthd/WHH8rH8gz+gbZK5bqZTVW01WBXoF5RTA12aimu5qiikmuTTAaG8T4ytqVWHufNF9fzHtUJhW1pOSIYvFJbXNcaBy5s3ZRz9dqzfE+NvdlV8lvoD5m/ub9BpQ3EX2uMWdizHmfsOg7UysF0phrA1JaVdpAVS2uRSingU8LUUUUVyKny1wpUUUNcIqUrTStRRRV2ukU0ioolU+FxLW2zL/wBR0qCuTVQotlg8WLi5lPqOhpVj1uMNiRSreNBNFb2/hQVDEBWVwdI25xPKvSP4aIq4JYWGzPmMRMsWGvMQQKAeEeGLdxC5zmRVLZHC6voFiNxrPwrUeKOJ+wt+zQZS4KqRAC9THWuLsw+lTNR5GHMarubcBWrgMHaIg7usvLNSeIPEQt2jkNsk6H+pGUEHWFkz0rzmxwQ3AxA1ZiWk5gQ2oAmdvXnUlll8yloCgxy16RG2mtX8Bj0YZFTLlYLoROoMevwpOvtr3Xwkgd3sEaj/ABwbd8TGW753cp3oWyvbB3DKdMpgQfe0/wCaL+G8QrI1uNVMEjTYeVo5nrQnG3LgcgOBO2nmG22moqLh5KXPaqSXBi5b2zDqvX0oFaiX04yOYPmm2vDnugzkCNx9Y3ypOJcPLYxFeMpaWj8mst1AA1+FavhuBwV7DnD2sWSiScoMtIJIkHcaelZzF3/bXkZHZAfKLkQEnTzHaOopviPgF7DulxQt2NzaGQg8hCyeW9M7I5wodptxnu9Qktsoh1YQQJF85O/IEZIWOGvEsA5IR0dPwh9AH6bVawbupazOQsTOktEcu32qrj7d6xZtq7iX8+QTmVdYDHSZ00OxFQHFF0J9sFYQQSYfnz+JrZY17o08kLZ52WgagGeYOmgIE+fxClBKzbJJynSdqD8WEXF5b/aKv2cSzEe0P4dwZVuhBFC+JODeECIA+f8AgreyUyNoHBErbV9bYy+Im3gc+/olEbDVaBqnYarAavQBeaUgNdn0AAkk7AdSahuXgoLMYA3J/wA19KzPFOKNd8olbY2HM926ntyqi6FtjCVc4rxuZS0SF2L7FvToPqaCgUU4HwG9iZyABVEknn2VRqxr07hf8LsIiK997twkAldEAJ5eXX60rUrtaYOY8k6yi4gECAcl4/RPh/AcVej2WHuvO0IY+Z0r3fh3hzB2FDWsMikxMjMdNt5oucQFXyjTtyoR2gjSOty2KQ3z5fK8ewX8KsWVzXnt2tJCA53PbTQfM1psN/CjB5PNdvFo3lYn0C/rW3e8ZHPT4gVXe1Jm2Sv2oTqlQmZPp7e62GtjL3WNxf8ACvCR5b91DprCss89CJ+tBOI/wwvqM1i4l4fl9x/lME/Gttx7jX8u1u2yZ51Op0A6d6XEvEmFtW/ae0YGJCiB8PWqbtLgYnxvPKZNu5F/0xIxRnuj2yXkF/hTW2KXFZGG4YQahfBivUMDxTC4tyb6BgygLJIYgH8JHMVpeHcFwdsNkw6ODscoaOWWW1ozNtDhdt+u/wAkKpspYYnTrgvA3w1RnAuRIRiOoViPmBXvlzw9bcHJYt2m0hgElY7EVVt8cs2bv8urgt5RlCnKCNI00BM1DtkRLY5n2iVbdlxThMncAvAnSoyK984/4dtYi2RetZCCW9plWQDqQSI8tec8e8EqrXP5a+r+zZBkcw7ZwCMmUQxkxH1ojdpafuEddaIZ2c/43WHptWcZhXtO1u4pR1MMrCCD6VXNMBAXKVKlUhReyY1Thbz27N7zITEToYB1UExofTSshx3i167dlmLhNsx2nlWj4FxD2d4m8oJKnMTMned+wrF8TxTXLr3CAM7E/Dl9K85RJcXbpMd/Lw8ZXpn08LgTJIAvbytN+eSMNjg2pCAxrm90EDQgcjVa3iAApQ5lYiQDBEHRpGxB+9CFuwDqNdyenSm22k5UB16ev78qOKdoOSSe52P6lMXIjeMxledNNStecfbKZX8x5GdjvOahNvHXQJVvMnu6A5pOzTyqrZYEQW1APz6Ryqf2hJWNCBEqIn/mhNlgw6bk5UoMqnHhuQRPRW54Xxez/Kvav2/Z3CrHzD3g2x/StL4RcPhQ1tTI8vm/Ew0JB5rXmeHulyDccToPMNI3raeEPFUexw5QQ10WwwDFQCC0TyPIUXZnY3w4xaLfrz8UjtVEUadpNwSTlu8ckd8Y8BGIsjKBmtSQPxMI1AP1rybG4Swq6glixjYkRyNexeJsfew9h7yKjhRqpJBAOkgjffavGWujVlDS4ObNqd9Y00FE2gQ7EN1+WkdyHs/awtcTmYjKYJv33HfYi6itZFTLA56gx8+tBg+a4zd/tp+9E8W5VH1iACNAZJ0iaE4JaNsFOSX9yr+Uq9kUxlmjFk129iAgLMYA5/oOp7VALgClmMKNz9gBzJ5CgGPxzXWnZR7q9O56setdQmFxmsnNOx+Pa6ddFHur+p6mjvgXwm+PvZSStlINxx9EU/mP0FAuFcPuYi6lm0su5gdurHoANa9+8N8NTC2kw1sGVEs3Jn/Ex6zSlergganrx3JylTm+7r9qxg/DmGsvmtKFhQsKSQB8OfeiAkrEMBykb95qHDX8hIAljqQBAPx61y05zM5zZSde0cgKTDgMhreOr8QmXSczoInrwUmBwpXdmOvOT96fcstPlMHtz9RVLiPHPYq7i1mXSDMSeZOugq9wvFNctC66hZE5QSdO5q6TqZ7LdPbipUY8DGdeSY2GJEMwEnqAZ+NNvXVtqZOx1ExA6mhXHuKYcKyyzN7wYQSvcTzobwTE28QrI2KzkmAGIVyvTpFDfUdk0d/7t570VlG2J3eIvz/cLN+J8VdxGIi3GZTprAI6baz+lCLeEuG5nv22MGJAzog2IEc+prX4zwsykslyJ0BMwQOWYaT3qxgLdy2uUW2//XDCfvrQxXqNbhLfnnqmi2kTia6eGngfysvjsBimIbDWw1tQD7wDTH4a1nAuPoUtj+YyYiIa24ykkdutVnwGId9A6HrEGo+I8Is4l7evs3U5WuEwSYOwG+o370GnWLrERnvk/MeSI9jXC5t3W8tfNaxMVnn2oEERIJ1HaKbhOE2lym0qjWTnEk9Ib96FeHLLag3C2U5UEaQN60bYrKNVEDf0696NSYKgxnx/ISdUupHA09d6lx+GW6htPzABHIjpNZiz4NtpiEuW3yBDpbI8p03neRR5sap15HkZ+nSpsPiP+KYOB7vhAD30wQDZBfGfguzjkloS8o8l0an+1h+JO3LlXgvGOGXcNeexeXK6HXoRyZTzU9a+lsdjCEPswC2kTt3FeecV4aMfbNrEgriUzm3eggRvlP5kPTlRRtDabw3Q+qwKDnsLhEjxXj1cqTF2ntO1ttGUkMOhH+T8aVPYtyUNrFbS/wAZa+MxXKwECNiTzJP270Mvr0AHIneTV7E8LvWlXPl950MHUXFMEN9COxqB7cQreVwQCCIWuAKQpnCBC9OyoKrBrZDLmFXlJPM/Hl2opw67mQAQMh94kZhTr94uwBCgTso9dorqWkXXMCp3U661qo/EIKBs9H6TiIg56XvY7xuupcThraEaAi4gIYEypG+nU1JhsbYU5bgOXcFeZ0qti8AQRliNwA0iPXerHDuDXL1xLSgS8xJ7E7/CsCHRqehxR3dkEmwA/PDK6vr/ACl5YRsrDrz9e9HcFbGHslLyZ7eZLgZGhlZYgz0/c1WxNkXWTDZUtLaQLcnQKQDOZo97XkdfhWfxl9rUpauMUaQQSCN4HmG+lbDPpuEHPh46e3ekBX/1LHjDYaTc53gwYHMngtTxzxg9+37IqEVpzQcxIB05DSs7jsNlXOrSDuOfy6VSwitdJyvAXQ68+WnTlPeliyUQszgwPXQ8qFWD3VLmU1skCiCRGZNujlxnUoVxi/tbG5iRrpH+fSosIncBVEsx2UdT+3Oh73ixLGu47Fyotroggn/c3U9hyFd2hSFJgauDtNQ16hcctOSbxHHe0IAkIvujn/c3+4/SqgrlOtqSQBv/AJFEQ167/B7gQW02LaC9yUQc1RTqexYj5Ct7fciIA7nn6dKBeFcC1jD2F2K2itzSPNmBjvGutaIurAgkTG01zmv+rLt/nu63ynXs+mcO7o9blSxF7LmITM5HugjXWI7VLgcUylV9mJc+ZZ1QR06ULx95Ld1GOj5gdNZ6iqGO4pdXGZrdtmTyzljNG5me9KuqnHncGI5yZ5xbvTTKQLQIzBMnhaOWqseKeEy7OocAeZidV+HSrfFOKWbGFOZoLroAecb9hQzxF4ouuBZtjIGBlt2jp0HxrN4Dwzir9pXdhkZiMg3gGM3SNNqjAx1RxabHhvnID8IhDxSZ9TTK+e6Tp5qphuDXHw74u3dKqDKo3mDa9N6OeAPDHtiMTejLBy8jPaDtrRnEeCc1tLdrENbC7qRPx3qfhGMw2DU4bMcynzEiCfUgQaZNW0VLA+m7x0QMOtIye/XM/nijuHwIsjKjHLJ07/5ypr20JkrJ5EaH6U222cF0JYE6AyKrWsPeRnd2zKx8okeXsB1qpAaABbxA63BCgkkk38z1xVh7roIOq9efoTQXHYNbt+3oPY+6QNGDHZp5eaKu4zi1uyct64EkSJjWqVviCXSfZXA9sDzDLud9KxUcCQOOWvK+m/xCJSD2guAi2en7VbGJbw9xLNpsz5lLZ2PlUnrtWhjOBPPeP36VmHwRN1WVPzSSSSZjKB2UCPjWm4fgoOfMA0R2HbtVUgcZwi3Xj7q6xGEEuk9eCavDIQqCYmZmdKnTh7FCubXk3Q1Dh+JK7MqtmFolXMH3gNpO9NOOYBdZEcuY61tppxIHXwhOD8j10L96pXLFxTke4FPrE9x1qG+Av42ZewH3oxirntF035EgHTmNeVVsLw4LJdxmjTKAI+HWoBNm+vQ8lCd68e/iXhD/ADCvaWSyQ8HZl2kcjlIpV61xXhWGOU3Qo3gn8W0nX4VyitrupjDAtxUNFr+1e/BYnHOL+Idii2wQCwUEKz/mP+4g/Sq3FiEysArAmG/F0hte1E/FfBbwuG6QFVogrBVuUsBswEGRQb+YtZVt5hqwBILaDmCCev3rnukuOMX1646Lq04axppmR+fbKNIU+PyZ1XVZBXMoABnQiOR7zVJcHakWvZsrEkKwhkY9N5FEruDZrQgrOeQTMZRMCf1rmBsnMcwPtJJGw1HQb0qyu1tMg3I4+aNU2XFVFRhw6G2Y3Qh97CG1CkAmdoLdhA3+VHfDnBLt1VdQVthsh/OGInMA0SBP3qzwLDMcSMWXUohKFdyHyjU8h7x70Xxni2zh2m5mZ8xyqh0ywSGYbb6U5So4mB1TXTTS/wCNUrtG0ODjTpZ7xnIOX5/CCxfsK1osM0kOisj23ygZSZOusgjTasvbxZuf01QCD7oXylp3PT02qNuIzde6xy52ZjA01MlV+dTYl1YBkVgDMnNvroI6xzrNRxk7tOvYQi7LQbTYBqPfem3b7TlNsLcG5AgR003NZ/jONzHKOW/rV3FcSyIYkMZGu/8AdWeXUzTmx0Jd9Rwyy+eteSR27aRh+kzXPluUoGkVUNXIqrdGtdNchNo54MwftcZYWJAcO2k+VCCfrFAa9G/hFhZe/cjUKiKe5lj9hQdoJFIxrbxsi0fvB3XXqr3JYzATSCeff0FVP5ZA/tRzEDQiJ7dKdZxAKGYCj8xgSNxPQa61JaxC3QMjB15FW0J2rnxjieY5/jRNg4ZjkU4YJCZABYDntVHGYR8+ZfKDpI1PoBtM86XDDbuXHVLpPs95HknmBrqRRB7JQ5pza78h8OVU4Y29+YPx3j3Viabr7tRv5rP3MHcOayqHKzQztyUj5g8q1WE4ZbS2q2iRlECTVK5ZYMbofcgmN+49Iq5eQ6XF+UxJ7ftV0KWCZE+GXBStVxAAGPnj7IWnE7guiybFw6kF9Co77zFScT/lgM18ROgaJ+FWxiypmCPgQaab9u4NV+Y5/GtlnZwkgnSQqDxiDgCN8FQY3Hph7BvAtosjTb1FZz/tLi8Q6IlhVmDJYax2nSi/F7XtiljUAyTzA6TXOAcLFn+ncUnIfI3KD3/SgPxOdgGVhwyk8vTemKf02MxkdrPjEoB404bdfE2tyoTUkGNDqJruBJw1oXFts4JgCADknUg861t/iasxRVzHmx2WlirdsWwjFckDpE9dap1EOJIdYes6nXW6jdoIaGlvdw4DRNW8PZh0EHLIJgxNZXhHE8UHvK/n8xaI1Hcda0yWggIEEbgtoD2B2oPbxH9RiiZWnmZMEfKKurILb9bx0JWaJGF9pH5VvDW4DkCCwcnlrH3pcHa86KWMGBmEip72UWgZEsI7yd6iupoAhE7ECOfKZ0ojQG/vvQpLhfx8letXyr5CNCw9BO9Nw2KzXIbdSRl7dZ51DbJymVMpAEa6g6EkUKxWJK4lVysQ5JZ91U8tNx61YJHXkqICHeNfFAW8LdvDC6yg5/MRlk+UabkgT8qVEG8HWWuPc9s2ZyC09e3aKVZInNgJ/wCvymWVWNEBx/8AXws7wLxDdwwgxdtkiPaGYHMITzjSKkxVvCX/AGd0Wbqq0qxVgCTJ0IYGOlYyxi3dPdJUk8jlHWKJcG44bAuIUFxHEQxIUHmYFZbijC6LFFrNl31KVpAsLdZ7/VbgXcKqMrPdVFUQSpaI3BHMRQleMYLMWR00BgsIf035jlWUxvEL91cpuNlYAFYGWOQBGseutDF4fDbbfCKWfslF7Yy1t79BEZVqtPav3/heo8Jwa2cI73HB9q3tNDOUEaCRzivN0xlvO5LkyxInc686lGJuBDaBYCZgMQvqRzPKqFzCA6xThwmxsEBgqBznxedQR5eXFT3saXIRSAp66xTrN021LOxPQTvUZ9nbWY16daE4jEFzW6VD6lh9vqs1tpNK5+/059el1iL5uNmNS21qO0lWUWukAAIC4znEmSmlaq4havkVWvLWisgqpXp38L7hTDXHzZV9oSxOogKJrzEivRv4UsrrdtO4ABkp+ZWG/wA5pPbJ+mCN44cPCSE3ssYyDuPsVb8Q8RXEKnsCxgkFDsV/N8603A8FcODKW2Csw3MSBz7n1qxh/Dti2xdd2EKZO3SOWtFRw0L/AFVUZgIPp2pEUnm54872m3DgM0+/aGAYW6eo0vkFiuGcBxWFuJcZfahnbmfKQTOncCRWxw+Ozyqg66mRt605cRlYIb1sM2yMwknpHXtUbWV9oGYnMTHlECR1irILTiBtN8hwzG/khl4qCHC8GM+eR9Va9qMh+52n0rFcbbE3cQuUlkkSgOgOx+cVqcQuGDgXHi4fdBJAYjl0JrI8d4xft3vLaAt5lE5dd9p6mqrOJgTvEfMwJ3Z8FrZmkGQPbw1PGFveE3na3FxSIOkwfsatNbG4ihHDxdgMruoYaoSDlPYkbVfw+JuElTlaOcR9udM06kNaHT5fvyStRsuJELqXJ1ykCd4+9QcRutlIGhOg661KmGcTAVZMyx69F2qKzhLkyzSw2YgadoGwrM1SIIieXFaimDIKH3uJ28Plw6pNxo10zNO5n9Ks2VZ58ildiGka0I4liLftku31ysnuuG8sVKfGFlVAAZoMyNomgsc2TJsLAcPBMGm4gYAZzJ4lFitwLkCqABEcooeuGCtIQqeZiflUl3jmd09nkNogFzEtJ2HaidnBTrG/c7UZpDyQ3RLua5kF2t/2gnGcMPYPEhrhCKeYzHUx1iayPiv/AOkyC1ezPoddCpjeBoa9Bv2RcdRHlQkmefIR9ay3jLw9ZuujBDmB87AkeU9PpS9VrAQ52U7r8fHXgm9mqO+0dbr6QPhTeHbzfy4xL32IIIccj2CxoN6v8PvLdkqNIGUwSYjbpQPh3BLyW7lm2c9ttgdCO9G+Em5aUDLpA0EQpAgj5iazRcJkA4epj4U2gDQifbRFrfmAIWOs0qj/AJu7+AKeu59BSpyWpGCvFMJjbltSqtNs/g009O9Q+11ByyDuBypzIIzKDHOk4GpUH4/uKVAaDIHXFdh+ItwyRy9lxrwyypOsSI27GpFxTNrE8pPQDb0pgYdI6865dAXXNA+vyqzB0WW4mjtOnwH4U4ZiBoDl5COv29ap3+I5DsJiIPL5c6q4riUaLP60MJJOtN0tlm70ltG3HKmVJfvlzJNPtJT8NhiddgNydqMcNx+EtmBZa6/ImDr2XaKZc/AIAngNPhJMpOqGXEAHU68t/pxVHD2i3uqT6An7Vc/kroEm3cH/AIG/atLhb/EXTNasQs7SFI7xppr9KrN4rxtl8r5lI/CZoRr1gJ+nbmmv9vpn/kPgQs6Ry51DdWtna8XJiBGIwwuDrkk//wBKJFRYjw9YvycHch/+5uH6K52PZqtu1tNngt55eKXdsL2jEwhw4LCXVg0d8C8WXDYtGf3HBRj0n3W+B+9DOIYR7bMjqVddCpEEVQIo72h7S06oDXYTK+j8AWCjO2bXcjTXbT0NRXrt/NCuBbAaUjU/GvOfAXiu5cvpYxF45cmRJgAke7J/NXoGNsgqQ93JGs65+3auW5rmNwnTjHmdF0AWucHAzPCfIahZjjfCPb4i1ibbeZWXMNMyZd/ptW3w19XAGn90azz7VjOC8fz4prTLmSPKWWW0PT41prd92z+Vgs+VmAA+A3is03wb66ee/WerLdZhiN2vl5QhviPhS4h1V3ZUXUQus+vwosMLIClVfSdY+eWdqs+xB1Da8xVBMPbt3DcN2LpHvEiSs6abRRHNwnnxEftYa/E2JyygT11mrqXQlsm6YIGgJ6cgfhXcFjFNsXbcw5570PsY6zdzAtmCGC3WQdutc4JxAXbTTb9kodltg7so5kcqprjiFxEW3zzNuCpzIYZBmRO6OWfFZ/xpxi9cuG2rABfzLHm5FSNYo5w3itw4IeY+1yweZLDnVDiHCUYEPmOuh0zD0Ya/Or3B7iW0jLlA0EySepPPWl+0Zmxgybplz2YQGiYiBaOigdzw5jMYc9xgqEgwTBI7AU7iHhh7KMLZJBBGWBA9GPu9aNY/Ftn8hYRGWASSewo1fxmS37QqTAEiN53FWwMc1zZIw66eGat1aoHNIAvp+VifBHAbhY3LjQggKs7gbsa3mIuMgkGQeU6j0p+CtjIDECNAABAPah3GmuBMyFfIrFgRJeAYE8qbIwtnM9eg90mXGo/0nrU+q7gMcxZ3VcySE0iQV6/GaqXcO7uXcwOm0VL4asLbw6eY5jqxO+Y6n61Z9tcloIbXmOXQClnUxUaC6TrAuOuGiKH4HHDG6SqqwjM2YDyxl3zRMa8jTbF4s6gnUjnOg0/epbwUZnfWSNI+VBxxxjdIFqV0GcmAF7aSTPKigNpZ2usdqpPLkjrXI9wyPlr8qVAuIcSVMuqwZiPXtSon1FgMK8ta4gPvkjpBgVCcWimQWYjYnTbas7nPU12T1o42Vg39dyp231DlCK3uInXXfpvQ+7iC3Wo1WpFSjsptZ9oSr6j3/cZTFWruDw4Y66Ab0xUozhMC10LYtlBceT5jlECJ1g1mq8tEDM+XFE2emHEudkLnjuHWgKpJcV2ifIPwjnH6VocIFQKLX9NiTJVREAEmftQLFcEv4XEJaYK7PGTISVJ9Y5VouCcMuWsQpxSldcqg6qc2hM7RrQ+y0e66A2mkWfZ2995HIiCOQhFuNeI8RaKqi+zQqMumjjmQen1qnh+LWsXK30EA6tAjtB3GlbHDWrL2jhrttWQEgoeR6qd1PpWS414VFixiFsF2U+ZZEtGkrI300mqZUmMWaX+sSACBbdr35p2Nxy4YhRbzKVJBU5dokHoYqfEYxL1gXF8txfdaAHkboxG4PWht3C3LeCRmXzgQVYZtSYAE7GDGlWOA4a57Mu4KglY2giNfpWsRLi0ixHsi7NW/q9rh+VNmtcTshDC4hBCPzJA91uqk/KvO8XYZGKsCGUkMDuCNxVnA8Ra1eJQxDmI9TpRjxYPai3igNXGVyNiw90+pH2rNKWOwHI5IW1Ma4F7dDB8YlZrLWn4V4vxCm2l65mtrpLCTG2p3IFZlN4pxWj1KbXiHJNjywyFu8VgWa8LqXghLBhG2u0Eda3acUJUAsA2g7E9e1eNcM4y9mFIzoPwnl/af0recH4/h74gFlaNRpmHWR+Ielcp1OrRN8tDp37u/JdD6rKwG/OPhH7166bg/qaCZXn2mKzHi033YXEMrlgg8vQUTv463ZCklsk+8BrHPnpU+D4nhrpAVtwSAVIPpQBMyM+NxyumBiAkCRGlteCA8JxT2rNy4LSbyQ5YiI6A1e8J8cF+4c1tUKaghmK+hVvuKNvbRxlCgRpB2PY0ExuIwuGcglUJ1K2wSTGwJO1FbJ43t7garL3B5yj404ei1XGsebdi47DzBSQI07aVhOC8Vxd67aJ8yTLqQANSZjSdB35Vr+F8Y/mrJZAMsxDxJjtrNNxOIygFlVdCQqDzv6nkvat1DYk+fWfQCHS7Jwxf9depVHjXiG6pFmyrZyCTAmByMnnHIUd8OWrlrD5rxLA6wZLCdY9e1ZI+IitxXa3meYUDyjLzBBq9xLi6sPaLnW4sAhiRM9BsaB9Y/cZm8T1HdaYk8GXULBkCLTz61W4t4xCoacoIk5tIHedqAeJ/E9q1ktKC+YgtlEgJ1J77UMPEjas5WcXbje6h2WeZHMVjzgMWbzEXP6jakN/u0BAJiI6U0yrjF7b+hbikzSDTa+7qx4LfYLxLhrxItyCo90jcDfTlU1zj2ZwvmOxOwVeQEjrWb4TwYWVa2rhnI8xIgDTnr1q97AW0M9IGvmY9e2vWsuc4O4dbuvVXDdFU8V8auPfSyk5F1LdW6CjSYUrYXMyhjEyPmI3mhPArCls5YErt6/iP6U3xHx9bdtm00+ZJ2A+NZaTOI5m0X63BW+IDBkLysd/ELiDi+lq05GRBmiNS2v2FKspi75uO1xyCzEkzXK6tOm1rQCue+o4ukJot05bdT5aQWtoUpqrTwK6BXYqKKTDpLADrXMdjGt3xcXdCCPhoR8RI+NPwXvr6123wtr15wNlMt37CgG9WDu9SnKbSaEDMu9lv04jaa3axG4iVJgsJ974xpR7h/ivB3vKXWfyPo3TZvvXmuHwTT7IZioPKcqzv6a86t8S8H3rgz2gj9VzKDI5rO8/CljTOOFnC8GCOPPiF6hjOFJdOdGKmIkenQ+996o4LhN21da5cxCNbykQQQRz2NeWcN4hisOcme7bKmMrTAPTKdK0vCfFF64/s3TMCCGbYjSNtaG5xpuxETGswtNc12q0PEeLYS5CBiUXXSBmPx5U3iOFv4iyVsKqDKQmZso1HIb/GKr8M8A27brcS5ngaI/I8jNFcBw11vE3iP9oBkR1ozq8Xj2+UZr2gWF+cry/F+B8fZBZrQIGsowbbn3q/h7WfBuOgDD1BmPvXsiXUZYmI016/tXmfHURbmIAIA1JAGgYqNPsfjVVKpMEbwq2do7Td4K8+vLBkcqsoQwn59jTbi1BZuZG1907/vXQyXOBlPdai1BkEgjYjQiiF2z/xVZrdQhWiWD8U3VXJcAcaa/ijn2Na3gWKtXAXtsh1WJ8rpqAR6V5y6UxGZGDKYI5ikK2w03XZY+Xhp3eCco7Y9lnXHn+e/xXvGHsAsykgwdwQTtuRuDWN8VWrS30UqrMQxY6gATAk7kzQngXiEnRX9le0HmMq/xP2NWOIcTNwxesZmH4lOVvUaGkyC12F7bifA7tPNN079pjrLQ+FsXaW26W8wZD5l05iZVuf3oytif6hBzRrMzWQ4Pet2VLqjuWM5TE7Rqau2uOtdAyjKQdjse2goZe06Ejq/OVvA+/XdvhEsVZW5dUgDyTB5me3KqPGsSltQwGa4DvExrrpzq3awT3Z2UHf/AKb/AFqWzwgqCDLegNZDHuuR17KsbQRfJZR+Ji2wPmkmYKg7/YVpcDiDdgFcwA0mI171eXhRzBmZVAX3SBt1OlWLbW1UsmV+u4j1FGa0iNN+89yw57TkPwkT7JZYIinbkST8KGXsWL9z2amFUCSNz1PrVHj2PtNIZlWIzMT5R2WdWPpWWxviq1bDLhUOcwDdbSQJiBufjFFaH1DAy68ENxYwXzWw4pxHC4ZPMcsaBRqzHsK8v4rjzeuM/mCkkhSZgfvVS7dZ2LMSzHcn/NK6q0/TohpxHNJPqk2GS5FKpQlKjISmApV2lUWFykaVNJqKBOsXIYHoa3nASosX7gAmW/8AjrXnzGtP4Qx4Oew50uCPjEEepH2oZEPDuEJ7Zn9g099/lFuLYv2VtLCeVYGc82J6mu3+HB7OdywAEzqJgaQaH47Hqn9PEodNA4UlWHIgjY9RUg4oGQIM9wKAFBEAdJJ3pKtSe8ghMPIe6f2pE4RdxQts7lQgyu5Es0bAA7ka6nrV23w61ZaEDZt8zMontAAitIMOFVU5KAPpqfnQ/FcEa6GdACdAZ10HQUhUe95gZJJ7zNlLgPEI2KNIHIjURuO1RWOJsbzM0gNGUcgBPOhacP8AMp1zKdCdIP7UQ4pxhLJVblsHOmYbQDJDCCOon41KBFWQTHV0Wk+bQu8X4tdeLVgEu2nZBzdjyA+tZjxDiBNyDMsAD+bKApP0NT8S8SXH/o2VS2re8y+9l9eVAOIYnMwA2WuhRogEAX1J64oz6mGm49w63wq5FVbyVbFROtdFcsFd4df/APtt/wCE/pU96zQy8lGOG4n2gyt74/8AMOvrWmkGxW1RuWqha3Rq5h6q3MPVlpUQlrdE+G8fvWfLpcT8r7j0bcfWoXs1E1mhPpteIcJWmuLTIK2HDvFOFac+ayx3kZgfiP1rVcN4lhVUZMQpX+5CO/evH3s1A1jtSx2Rsy0x5/CMNoMQQvcMR4nwY964kjmWUEUNx/jmyAMl+3E/mkx8K8gFntXfZ1k7KTm89wj5UFcDJo77r0DiX8RRtbQ3D1byr9RJrL8Q8VYq7pnyDomnzJoRkpwt0Vuz026Tzv8AjyWDWedY5WXLjsxliWPczSC1ItupUtUcDRCUSpUyW6sW7FW7WF0kwANydhWsKipi1SpX+LAGEUEdWMT6dqVXZRR0qVKsrCVRmlSqLSY1S8N/1U/vT/1ClSrDvtPd6hEpfeF6Hjdm9TVW/wD6fwFKlQz9qe/zWsve81E+D+58DSpVxNm/u9bwlRqq3FPfPoPtXnP8SP8AVs//AIj/AO41KlTbP7qo6oDwL3Ln+darLSpU9S/uO7lvaP7bO9TJSeuUqaCROar3qXC/9e361ylWdUQLT3qq3aVKmFWqrXKrXKVKhuWlE1RNXKVZUTK5SpVlRKnilSqKKVanSlSraiuWaj8Q/wCgv91KlW3ZKLPilSpUFRf/2Q==",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              width: "100%",
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 15,
              height: 300,
            }}
          >
            <Text style={{ fontSize: 25, textAlign: "center", color: "red" }}>
              Dinner
            </Text>
            {dnr.map((m) => {
              return (
                <Text
                  style={{ fontSize: 15, textAlign: "center", color: "white" }}
                >
                  {m}
                </Text>
              );
            })}
          </View>
        </ImageBackground> */}
      </ScrollView>
    </>
  );
};

export default Deit;
