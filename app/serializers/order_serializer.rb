class OrderSerializer < ActiveModel::Serializer
  attributes(*Order.attribute_names.map(&:to_sym))
end
