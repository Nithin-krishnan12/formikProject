import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
const SignupSchema = Yup.object().shape({
  // email: Yup.string().email('Invalid email').required('Required'),
  ProductLabel: Yup.string().required('Required'),
  quantityInOrder: Yup.number().required('Required'),
  Specifications: Yup.string().required('Required'),
  productCode: Yup.string().required('Required'),
  grade: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  bName: Yup.string().required('Required'),
  Squantity: Yup.string().required('Required'),
  pType: Yup.string().required('Required'),
  barcode: Yup.string().required('Required'),
  pUNIT: Yup.string().required('Required'),
  maxRP: Yup.string().required('Required'),
  QS: Yup.string().required('Required'),
  Reorder: Yup.string().required('Required'),
  nQuantity: Yup.string().required('Required'),
});

export default function App() {
  const [imgUrl, setImageUrl] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const pickImage = async () => {
    if (imgUrl === '') {
      const result = await launchImageLibrary({mediaType: 'photo'});
      console.log(result.assets[0].uri);
      setImageUrl(result.assets[0].uri);
    } else {
      setImageUrl('');
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#035EA2',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 50,
        }}>
        <View style={{borderRadius: 50}}>
          <Image
            source={require('./backArrow.png')}
            style={{width: 30, height: 30, borderRadius: 50, right: 20}}
          />
        </View>
        <Text
          style={{
            right: 20,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#ffffff',
          }}>
          Inventory Details
        </Text>
        <View></View>
      </View>

      <View style={{margin: 10}}>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: '#fff',
            elevation: 5,
            width: 120,
            height: 90,
            alignItems: 'center',
            margin: 10,
          }}>
          <TouchableOpacity onPress={() => pickImage()}>
            <Image
              source={
                imgUrl === '' ? require('./galleryIcon.png') : {uri: imgUrl}
              }
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
        </View>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            ProductLabel: '',
            quantityInOrder: '',
            Specifications: '',
            productCode: '',
            grade: '',
            price: '',
            bName: '',
            Squantity: '',
            pType: '',
            barcode: '',
            pUNIT: '',
            maxRP: '',
            QS: '',
            Reorder: '',
            nQuantity: '',
          }}
          onSubmit={values => this.onSubmitted(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('ProductLabel')}
                  onBlur={handleBlur('ProductLabel')}
                  value={values.ProductLabel}
                  placeholder="Product Label"
                />
              </View>
              {errors.ProductLabel && touched.ProductLabel ? (
                <Text>
                  <ErrorMessage name="ProductLabel" />
                </Text>
              ) : null}
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.calenderView}>
                <Text>{moment(date).format('ll')}</Text>
                <Image
                  source={require('./calender.jpg')}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
              {errors.email && touched.email ? (
                <Text>
                  <ErrorMessage name="email" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('quantityInOrder')}
                  onBlur={handleBlur('quantityInOrder')}
                  value={values.quantityInOrder}
                  placeholder="quantity in Order"
                />
              </View>
              {errors.quantityInOrder && touched.quantityInOrder ? (
                <Text>
                  <ErrorMessage name="quantityInOrder" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('Specifications')}
                  onBlur={handleBlur('Specifications')}
                  value={values.Specifications}
                  placeholder="product Specifications"
                />
              </View>
              {errors.Specifications && touched.Specifications ? (
                <Text>
                  <ErrorMessage name="Specifications" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('productCode')}
                  onBlur={handleBlur('productCode')}
                  value={values.productCode}
                  keyboardType="numeric"
                  placeholder="product code"
                />
              </View>
              {errors.productCode && touched.productCode ? (
                <Text>
                  <ErrorMessage name="productCode" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('grade')}
                  onBlur={handleBlur('grade')}
                  value={values.grade}
                  placeholder="grade"
                  keyboardType="numeric"
                />
              </View>
              {errors.grade && touched.grade ? (
                <Text>
                  <ErrorMessage name="grade" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  value={values.price}
                  placeholder="Discounted Price"
                  keyboardType="numeric"
                />
              </View>
              {errors.price && touched.price ? (
                <Text>
                  <ErrorMessage name="price" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('bName')}
                  onBlur={handleBlur('bName')}
                  value={values.bName}
                  placeholder="brand Name"
                />
              </View>
              {errors.bName && touched.bName ? (
                <Text>
                  <ErrorMessage name="bName" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('Squantity')}
                  onBlur={handleBlur('Squantity')}
                  value={values.Squantity}
                  placeholder="Max sale quantity"
                  keyboardType="numeric"
                />
              </View>
              {errors.Squantity && touched.Squantity ? (
                <Text>
                  <ErrorMessage name="Squantity" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('pType')}
                  onBlur={handleBlur('pType')}
                  value={values.pType}
                  placeholder="product type"
                />
              </View>
              {errors.pType && touched.pType ? (
                <Text>
                  <ErrorMessage name="pType" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('barcode')}
                  onBlur={handleBlur('barcode')}
                  value={values.barcode}
                  placeholder="Barcode"
                />
              </View>
              {errors.barcode && touched.barcode ? (
                <Text>
                  <ErrorMessage name="barcode" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('pUNIT')}
                  onBlur={handleBlur('pUNIT')}
                  value={values.pUNIT}
                  placeholder="Product unit"
                />
              </View>
              {errors.pUNIT && touched.pUNIT ? (
                <Text>
                  <ErrorMessage name="pUNIT" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('maxRP')}
                  onBlur={handleBlur('maxRP')}
                  value={values.maxRP}
                  placeholder="max retail Price"
                  keyboardType="numeric"
                />
              </View>
              {errors.maxRP && touched.maxRP ? (
                <Text>
                  <ErrorMessage name="maxRP" />
                </Text>
              ) : null}
              <View style={styles.textFeild}>
                <TextInput
                  onChangeText={handleChange('QS')}
                  onBlur={handleBlur('QS')}
                  value={values.QS}
                  placeholder="Quantity in stock"
                />
              </View>
              {errors.QS && touched.QS ? (
                <Text>
                  <ErrorMessage name="QS" />
                </Text>
              ) : null}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <View style={styles.textFeild}>
                    <TextInput
                      onChangeText={handleChange('Reorder')}
                      onBlur={handleBlur('Reorder')}
                      value={values.Reorder}
                      placeholder="Reorder Quantity"
                      keyboardType="numeric"
                    />
                  </View>
                  {errors.Reorder && touched.Reorder ? (
                    <Text>
                      <ErrorMessage name="Reorder" />
                    </Text>
                  ) : null}
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.textFeild}>
                    <TextInput
                      onChangeText={handleChange('nQuantity')}
                      onBlur={handleBlur('nQuantity')}
                      value={values.nQuantity}
                      placeholder="Notification Quantity"
                      keyboardType="numeric"
                    />
                  </View>
                  {errors.nQuantity && touched.nQuantity ? (
                    <Text style={{color: 'red', marginLeft: 5}}>
                      <ErrorMessage name="nQuantity" />
                    </Text>
                  ) : null}
                </View>
              </View>
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textFeild: {
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
    margin: 5,
    height: 50,
    padding: 5,
  },
  calenderView: {
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
    margin: 5,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
});
