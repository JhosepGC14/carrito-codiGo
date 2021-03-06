import React, { useState } from "react";
import {
  StepperAction,
  StepperContent,
  StepperContext,
} from "react-material-stepper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setFormStep } from "../store/actions";
import { ReactComponent as WhatsappIcon } from "../../../assets/images/svg/whatsapp.svg";
// import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";
import style from "./StepTwo.module.css";

function StepTwo() {
  const dispatch = useDispatch();
  const valuesForm = useSelector((state) => state.shoppingCar.form.step_two);
  console.log(valuesForm);
  const [userValues, setUserValues] = useState({
    needBill: false,
    name: "",
    patherLastname: "",
    motherLastname: "",
    department: "",
    province: "",
    district: "",
    via: "",
    nameVia: "",
    livingPlace: "",
    numberLivingPlace: "",
    zone: "",
    nameZone: "",
    contactNumber: "",
    shippingFee: 69,
  });
  const { resolve } = React.useContext(StepperContext);

  function onSubmitTwo(e) {
    e.preventDefault();
    dispatch(setFormStep(userValues, "two"));
    resolve();
  }

  return (
    <StepperContent
      onSubmit={onSubmitTwo}
      actions={
        <React.Fragment>
          <StepperAction type="submit">SIGUIENTE</StepperAction>
        </React.Fragment>
      }
    >
      <div>
        <form className={style.form}>
          <div class={style.top}>
            <label>¿Necesitas Factura? *</label>
            <br />
            <br />
            <Select
              value={userValues.needBill}
              name="factura"
              items={[
                { text: "No", value: false },
                { text: "Si", value: true },
              ]}
              onChange={(e) =>
                setUserValues({
                  ...userValues,
                  needBill: e.target.value,
                })
              }
              required
            ></Select>
          </div>
          <div className={style.grid}>
            <div>
              <label className={style.label} for="">
                Nombre:{" "}
              </label>
              <Input
                value={userValues.name}
                className={style.input}
                placeholder="Nombre"
                fullWidth
                onChange={(e) => {
                  setUserValues({
                    ...userValues,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className={style.label} for="">
                Apellido Paterno:{" "}
              </label>
              <Input
                value={userValues.patherLastname}
                className={style.input}
                placeholder="Apellido Paterno"
                fullWidth
                onChange={(e) => {
                  setUserValues({
                    ...userValues,
                    patherLastname: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className={style.label} for="">
                Apellido Materno:
              </label>
              <Input
                value={userValues.motherLastname}
                className={style.input}
                placeholder="Apellido Materno"
                fullWidth
                onChange={(e) => {
                  setUserValues({
                    ...userValues,
                    motherLastname: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className={style.label}>Departamento: </label>
              <Select
                value={userValues.deparment}
                fullWidth
                name="department"
                items={[
                  { text: "Selecciona tu departamento", value: "" },
                  { text: "Amazonas", value: 1 },
                  { text: "Ancash", value: 2 },
                  { text: "Lima", value: 3 },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    deparment: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label}>Provincias: </label>
              <Select
                value={userValues.province}
                fullWidth
                name="provincias"
                items={[
                  { text: "Selecciona tu provincia", value: "" },
                  { text: "Amazonas", value: 1 },
                  { text: "Ancash", value: 2 },
                  { text: "Lima", value: 3 },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    province: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label}>Distrito: </label>
              <Select
                value={userValues.district}
                fullWidth
                name="district"
                items={[
                  { text: "Selecciona tu distrito", value: "" },
                  { text: "Comas", value: 1 },
                  { text: "Puente Piedra", value: 2 },
                  { text: "Ancon", value: 3 },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    district: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label}>Vía: </label>
              <Select
                value={userValues.via}
                fullWidth
                name="via"
                items={[
                  { text: "Calle", value: 0 },
                  { text: "Jiron", value: 1 },
                  { text: "Urbanizacion", value: 2 },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    via: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div class={style.column2}>
              <label className={style.label} for="">
                Nombre de Vía y Numero:{" "}
              </label>
              <Input
                value={userValues.nameVia}
                className={style.input}
                placeholder="Ej: Petit Thouars 5273"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    nameVia: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className={style.label}>Vivienda: </label>
              <Select
                value={userValues.livingPlace}
                fullWidth
                name="vivienda"
                items={[
                  { text: "Departamento", value: 0 },
                  { text: "Casa", value: 1 },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    livingPlace: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div class={style.column2}>
              <label className={style.label} for="">
                Numero Depto/Interior:{" "}
              </label>
              <Input
                value={userValues.numberLivingPlace}
                className={style.input}
                placeholder="Ej: Depto 501"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    numberLivingPlace: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className={style.label}>Zona: </label>
              <Select
                value={userValues.zone}
                fullWidth
                name="zona"
                items={[
                  { text: "Selecciona tu zona", value: "" },
                  { text: "Manzana", value: 0 },
                  { text: "Lote", value: 1 },
                  { text: "Zona", value: 1 },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    zone: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label} for="">
                Nombre de Zona
              </label>
              <Input
                value={userValues.nameZone}
                className={style.input}
                placeholder="Manzana/Lote/Zona"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    nameZone: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className={style.label} for="">
                Numero de Contacto
              </label>
              <Input
                value={userValues.contactNumber}
                className={style.input}
                placeholder="Ej: 993541937"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    contactNumber: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </form>
        <div className={style.rate}>
          <p>Tarifa de Envio</p>
          <p>S/.69.00</p>
        </div>
        <p>Para coordinar la entrega comunicarse con el asesor via whatsApp</p>
        <div className="-mt-10 flex ai-center mb-40">
          <WhatsappIcon />
          <span className="ml-4">993541937</span>
        </div>
      </div>
    </StepperContent>
  );
}

export default StepTwo;
